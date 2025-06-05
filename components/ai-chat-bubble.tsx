"use client"

import { useEffect, useState } from "react"

export default function AIChatBubble() {
  const [hasScrolledHalfway, setHasScrolledHalfway] = useState(false)
  const [hasOpenedChat, setHasOpenedChat] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scriptAdded, setScriptAdded] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Listen for resize events
    window.addEventListener("resize", checkMobile)

    // Function to check scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight
      const scrollPercentage = scrollPosition / (pageHeight - windowHeight)

      // Check if user has scrolled past halfway point
      if (scrollPercentage > 0.5 && !hasOpenedChat) {
        setHasScrolledHalfway(true)

        // Set a timeout to open the chat after a short delay
        setTimeout(() => {
          // Find and click the chat bubble to open it
          const chatButton = document.querySelector(".agent-embed-bubble-button")
          // Only open if mobile menu is not open
          if (chatButton && !hasOpenedChat && !document.body.classList.contains("mobile-menu-open")) {
            ;(chatButton as HTMLElement).click()
            setHasOpenedChat(true)
          }
        }, 1500) // 1.5 second delay
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Only add the script once
    if (!scriptAdded) {
      // Remove any existing chat scripts first
      const existingScripts = document.querySelectorAll('script[data-chat-script="true"]')
      existingScripts.forEach((script) => script.remove())

      // Remove any existing chat elements
      const existingChatElements = document.querySelectorAll(".agent-embed-bubble-button, .agent-embed-window")
      existingChatElements.forEach((element) => element.remove())

      // Create script element
      const script = document.createElement("script")
      script.type = "module"
      script.setAttribute("data-chat-script", "true")
      script.innerHTML = `
        import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
        Agent.initBubble({
          agentName: "Assistant OpenAI-887ff",
          stream: true,
          persistSession: false,
          theme: {
            "button": {
              "backgroundColor":"#FF4500", 
              "size": "${isMobile ? "medium" : "large"}",
              "iconColor": "#ffffff"
            },
            "chatWindow": {"backgroundColor":"#fff"},
            "messageFromAgent": {"backgroundColor":"#c8a2f0"},
            "header": {"backgroundColor":"#c8a2f0"},
            "welcomeMessage": {"backgroundColor":"#c8a2f0"},
            "poweredBy": {"backgroundColor":"#c8a2f0"}
          },
          bubbleStyles: {
            width: "${isMobile ? "60px" : "70px"}",
            height: "${isMobile ? "60px" : "70px"}",
            bottom: "${isMobile ? "20px" : "30px"}",
            right: "${isMobile ? "20px" : "30px"}",
            zIndex: 1000,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" // Added shadow for emphasis
          },
          filterResponse: function(response) {
              const citationRegex = /【d+:d+†[^【】]+】/g;
              return response.replace(citationRegex, "");
            }
        });
      `

      // Append script to body
      document.body.appendChild(script)
      setScriptAdded(true)
    }

    // Cleanup function to remove script and event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [hasOpenedChat, isMobile, scriptAdded]) // Add dependencies

  // Add custom CSS to make the bubble more noticeable with animation
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      .agent-embed-bubble-button {
        transform: scale(1);
        transition: transform 0.3s ease-in-out !important;
        animation: pulse 2s infinite !important;
      }
      
      .agent-embed-bubble-button:hover {
        transform: scale(1.1) !important;
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 69, 0, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(255, 69, 0, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(255, 69, 0, 0);
        }
      }
      
      /* Mobile optimizations */
      @media (max-width: 768px) {
        .agent-embed-bubble-button {
          bottom: 20px !important;
          right: 20px !important;
        }
        
        .agent-embed-window {
          width: 90vw !important;
          height: 80vh !important;
          max-height: 600px !important;
          bottom: 80px !important;
          right: 10px !important;
        }
      }

      /* Hide back-to-top button when chat is open */
      .agent-embed-window-active ~ button[aria-label="Scroll to top"] {
        display: none !important;
      }
      
      /* Hide chat bubble when mobile menu is open */
      body.mobile-menu-open .agent-embed-bubble-button {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // This component doesn't render anything visible itself
  return null
}
