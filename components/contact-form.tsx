"use client"

import type React from "react"
import { useState } from "react"
import { submitContactForm } from "../app/actions/contact-form"
import { gtag } from "@/utils/gtag" // Declare the gtag variable

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    package: "",
    website: "",
    phone: "",
    message: "",
    newsletter: false,
  })

  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    isSubmitting?: boolean
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus({ isSubmitting: true })

    try {
      // Client-side validation
      if (!formData.name || !formData.email || !formData.message) {
        setFormStatus({
          success: false,
          message: "Prosimo, izpolnite vsa obvezna polja.",
          isSubmitting: false,
        })
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setFormStatus({
          success: false,
          message: "Prosimo, vnesite veljaven e-poštni naslov.",
          isSubmitting: false,
        })
        return
      }

      console.log("Submitting form data:", formData)
      const result = await submitContactForm(formData)
      console.log("Form submission result:", result)

      setFormStatus({
        success: result.success,
        message: result.message,
        isSubmitting: false,
      })

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          package: "",
          website: "",
          phone: "",
          message: "",
          newsletter: false,
        })

        // Fire Google Ads conversion tracking
        if (typeof window !== "undefined" && typeof gtag === "function") {
          gtag("event", "conversion", {
            send_to: "AW-17058751554/X5JhCPT6ssMaEMLIn8Y_",
            value: 1.0,
            currency: "EUR",
          })
          console.log("Form submission conversion tracked")
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        success: false,
        message: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.",
        isSubmitting: false,
      })
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="section-title mb-6 text-center">Kontaktirajte nas</h2>
      <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-center">
        Pišite nam in skupaj bomo ustvarili vašo novo spletno prisotnost
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-mono text-sm mb-1">
              IME IN PRIIMEK <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none border border-transparent focus:border-primary-purple rounded-md transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-sm mb-1">
              E-POŠTA <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white focus:outline-none border border-transparent focus:border-primary-purple rounded-md transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="package" className="block font-mono text-sm mb-1">
            IZBRANI PAKET
          </label>
          <select
            id="package"
            name="package"
            value={formData.package || ""}
            onChange={(e) => setFormData((prev) => ({ ...prev, package: e.target.value }))}
            className="w-full px-4 py-3 bg-white focus:outline-none border border-transparent focus:border-primary-purple rounded-md transition-colors appearance-none"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="">Izberite paket (neobvezno)</option>
            <option value="Starter paket">Starter paket</option>
            <option value="Growth paket">Growth paket</option>
            <option value="Prime paket">Prime paket</option>
            <option value="AI rešitve">AI rešitve</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block font-mono text-sm mb-1">
            TELEFONSKA ŠTEVILKA
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white focus:outline-none border border-transparent focus:border-primary-purple rounded-md transition-colors"
            placeholder="+386 XX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-mono text-sm mb-1">
            SPOROČILO <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-white focus:outline-none border border-transparent focus:border-primary-purple rounded-md transition-colors"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleCheckboxChange}
            className="mr-2 h-5 w-5 rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
          />
          <label htmlFor="newsletter" className="text-sm">
            Prijava na mesečne novice Web Space
          </label>
        </div>
        <div>
          <button
            type="submit"
            disabled={formStatus.isSubmitting}
            className="w-full bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-mono hover:bg-gray-800 transition-colors disabled:opacity-70 rounded-md shadow-sm"
          >
            {formStatus.isSubmitting ? "POŠILJANJE..." : "POŠLJI"}
          </button>
        </div>
        {formStatus.message && (
          <div
            className={`mt-4 p-4 rounded-md ${
              formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}
      </form>

      <div className="mt-8 text-center text-sm">
        <p>Po oddaji obrazca vas lahko pokličemo za dogovor o nadaljnjem sodelovanju.</p>
      </div>
    </div>
  )
}
