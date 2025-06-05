"use client"

import { useState, useEffect, useRef } from "react"
import { X, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { gtag } from "@/utils/gtag" // Declare the gtag variable

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && e.target instanceof HTMLElement) {
        if (!e.target.closest(".mobile-menu") && !e.target.closest(".mobile-menu-button")) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open and handle chat bubble visibility
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("mobile-menu-open") // Add class to hide chat bubble

      // Hide chat bubble
      const chatBubble = document.querySelector(".agent-embed-bubble-button") as HTMLElement
      if (chatBubble) {
        chatBubble.style.display = "none"
      }
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("mobile-menu-open") // Remove class to show chat bubble

      // Show chat bubble after a short delay
      setTimeout(() => {
        const chatBubble = document.querySelector(".agent-embed-bubble-button") as HTMLElement
        if (chatBubble) {
          chatBubble.style.display = "block"
        }
      }, 300)
    }

    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("mobile-menu-open")

      // Ensure chat bubble is visible when component unmounts
      const chatBubble = document.querySelector(".agent-embed-bubble-button") as HTMLElement
      if (chatBubble) {
        chatBubble.style.display = "block"
      }
    }
  }, [isOpen])

  // Handle navigation click
  const handleNavClick = () => {
    // Add a small delay before closing the menu to ensure the click event completes
    setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-button z-50 relative p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`mobile-menu fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "#ffffff",
          zIndex: 999,
          boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Menu Content */}
        <div className="p-6 h-full flex flex-col" style={{ backgroundColor: "#ffffff" }}>
          {/* Header */}
          <div className="flex justify-between items-center mb-8" style={{ backgroundColor: "#ffffff" }}>
            <Link href="/" className="relative" onClick={handleNavClick}>
              <Image src="/web-space-logo-black.png" alt="Web Space Logo" width={140} height={40} className="h-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links - Removed KONTAKT from here */}
          <nav className="flex flex-col space-y-6 mt-4" style={{ backgroundColor: "#ffffff" }}>
            <a
              href="#storitve"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
            >
              STORITVE
            </a>
            <a
              href="#portfolio"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
            >
              PORTFOLIO
            </a>
            <a
              href="#cenik"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
            >
              CENIK
            </a>
            <a
              href="#ai-resitve"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
            >
              AI REŠITVE
            </a>
            <a
              href="#o-nas"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
            >
              O NAS
            </a>
            <a
              href="https://blog.webspace.marketing/"
              className="nav-font text-2xl tracking-wider hover:text-primary-purple transition-colors py-2"
              onClick={handleNavClick}
              style={{ backgroundColor: "#ffffff" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              BLOG
            </a>
          </nav>

          {/* Footer with Contact and CTA */}
          <div className="mt-auto pt-8 border-t border-gray-200" style={{ backgroundColor: "#ffffff" }}>
            {/* Phone Number */}
            <a
              href="tel:+38670661104"
              className="flex items-center text-gray-700 hover:text-primary-purple transition-colors mb-6"
              style={{ backgroundColor: "#ffffff" }}
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
              <span className="text-sm font-medium">Tel: +386 70 661 104</span>
            </a>

            {/* CTA Button - Explicitly styled */}
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick()
                setTimeout(() => {
                  const contactSection = document.getElementById("kontakt")
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }, 300)
              }}
              className="block w-full bg-black text-white py-4 text-center rounded-md hover:bg-gray-800 transition-colors font-medium text-base"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "16px",
                borderRadius: "6px",
                fontWeight: 500,
                display: "block",
                width: "100%",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Rezerviraj brezplačen posvet
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
