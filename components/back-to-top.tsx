"use client"

import { useState, useEffect } from "react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check if chat is open
    const checkChatStatus = () => {
      const chatWindow = document.querySelector(".agent-embed-window")
      setIsChatOpen(chatWindow !== null && chatWindow.classList.contains("agent-embed-window-active"))
    }

    window.addEventListener("scroll", toggleVisibility)

    // Set up a mutation observer to detect when chat opens/closes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          checkChatStatus()
        }
      })
    })

    // Start observing the document body for chat window changes
    setTimeout(() => {
      const chatWindow = document.querySelector(".agent-embed-window")
      if (chatWindow) {
        observer.observe(chatWindow, { attributes: true })
      }
    }, 2000) // Give time for chat to initialize

    // Initial check
    checkChatStatus()

    // Set up interval to periodically check chat status
    const interval = setInterval(checkChatStatus, 1000)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return null // Back to top button removed, only chatbot bubble remains
}
