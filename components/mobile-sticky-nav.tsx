"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./mobile-menu"
import { gtag } from "@/utils/gtag" // Declare the gtag variable

export default function MobileStickyNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the nav when scrolling past the fold (approximately 100vh)
      const scrollThreshold = window.innerHeight

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 md:hidden"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="flex items-center justify-between h-16" style={{ backgroundColor: "#ffffff" }}>
          <Link href="/" className="flex items-center">
            <Image src="/web-space-logo-black.png" alt="Web Space Logo" width={120} height={35} className="h-auto" />
          </Link>
          <div className="flex items-center">
            <a
              href="tel:+38670661104"
              className="mr-2 bg-green-600 text-white px-3 py-2 text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
              style={{
                backgroundColor: "#16a34a",
                color: "#ffffff",
                marginRight: "8px",
                padding: "8px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                display: "flex",
              }}
              onClick={() => {
                if (typeof window !== "undefined" && typeof gtag === "function") {
                  gtag("event", "conversion", {
                    send_to: "AW-17058751554/X5JhCPT6ssMaEMLIn8Y_",
                    value: 1.0,
                    currency: "EUR",
                  })
                  console.log("Phone call conversion tracked")
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Pokliči
            </a>
            <a
              href="#kontakt"
              className="mr-2 bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                marginRight: "8px",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                display: "block",
              }}
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById("kontakt")
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
            >
              Rezerviraj posvet
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
