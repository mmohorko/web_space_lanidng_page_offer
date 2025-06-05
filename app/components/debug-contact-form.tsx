"use client"

import type React from "react"

import { useState } from "react"

export default function DebugContactForm() {
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("Starting form submission...")

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      }

      console.log("Form data:", data)
      setStatus("Sending request...")

      const response = await fetch("/api/debug-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      const result = await response.json()
      console.log("Response data:", result)

      if (response.ok) {
        setStatus(`✅ Success: ${result.message}`)
      } else {
        setStatus(`❌ Error: ${result.message || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Fetch error:", error)
      setStatus(`❌ Network Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300">
      <h2 className="text-xl font-bold mb-4">Debug Contact Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Test Message"}
        </button>
      </form>

      {status && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>Status:</strong> {status}
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>Check the browser console (F12) for detailed logs.</p>
      </div>
    </div>
  )
}
