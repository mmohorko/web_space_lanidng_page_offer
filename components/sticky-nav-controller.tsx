"use client"

import { useEffect, useState } from "react"

export default function StickyNavController() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Create and append a style element for the sticky nav
    const styleElement = document.createElement("style")
    styleElement.textContent = `
      .sticky-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #ffffff !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        transition: transform 0.3s ease-in-out;
        z-index: 50;
        opacity: 0;
        visibility: hidden;
      }
      
      .sticky-nav.visible {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        background-color: #ffffff !important;
      }
      
      @media (max-width: 768px) {
        .sticky-nav {
          background-color: #ffffff !important;
        }
        
        .sticky-nav.visible {
          background-color: #ffffff !important;
        }
      }
    `
    document.head.appendChild(styleElement)

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
      document.head.removeChild(styleElement)
    }
  }, [])

  useEffect(() => {
    const stickyNav = document.querySelector(".sticky-nav")

    if (isVisible && stickyNav) {
      stickyNav.classList.add("visible")

      // Force solid white background with inline styles
      stickyNav.setAttribute(
        "style",
        `
        background-color: #ffffff !important; 
        opacity: 1 !important;
      `,
      )

      // Also apply to all children
      const children = stickyNav.querySelectorAll("*")
      children.forEach((child) => {
        ;(child as HTMLElement).style.backgroundColor = "#ffffff"
      })
    } else if (stickyNav) {
      stickyNav.classList.remove("visible")
      stickyNav.removeAttribute("style")
    }
  }, [isVisible])

  return null
}
