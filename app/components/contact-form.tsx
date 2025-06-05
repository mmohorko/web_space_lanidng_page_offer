"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    isSubmitting?: boolean
  }>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true })

    try {
      const formData = new FormData(e.currentTarget)

      // Basic validation
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const company = formData.get("company") as string
      const message = formData.get("message") as string

      if (!name || !email || !company || !message) {
        setFormStatus({
          success: false,
          message: "Prosimo, izpolnite vsa obvezna polja.",
          isSubmitting: false,
        })
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setFormStatus({
          success: false,
          message: "Prosimo, vnesite veljaven e-poštni naslov.",
          isSubmitting: false,
        })
        return
      }

      // Try to submit to our API route
      const response = await fetch("/api/contact-simple", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setFormStatus({
          success: true,
          message: result.message || "Sporočilo je bilo uspešno poslano. Hvala za vaše zanimanje!",
          isSubmitting: false,
        })
        // Reset form
        e.currentTarget.reset()
      } else {
        throw new Error("Network response was not ok")
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
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
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
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block font-mono text-sm mb-1">
            PODJETJE <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="package" className="block font-mono text-sm mb-1">
            IZBRANI PAKET
          </label>
          <select
            id="package"
            name="package"
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors appearance-none"
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
          <label htmlFor="website" className="block font-mono text-sm mb-1">
            SPLETNA STRAN
          </label>
          <input
            type="text"
            id="website"
            name="website"
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
            placeholder="www.example.com"
          />
          <p className="text-xs text-gray-500 mt-1">Vnesite samo domeno (npr. example.com ali www.example.com)</p>
        </div>

        <div>
          <label htmlFor="phone" className="block font-mono text-sm mb-1">
            TELEFONSKA ŠTEVILKA
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
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
            rows={6}
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-primary-purple rounded-md transition-colors"
            required
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="yes"
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

        {/* Error/Success message moved below the button */}
        {formStatus.message && (
          <div
            className={`p-4 rounded-md ${
              formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <div className="mt-8 text-center text-sm">
          <p>Po oddaji obrazca vas lahko pokličemo za dogovor o nadaljnjem sodelovanju.</p>
        </div>
      </form>
    </div>
  )
}
