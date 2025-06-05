"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-primary-purple">
      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 lg:pr-12 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug mb-4 tracking-[0.2px]">
              <span className="font-space-grotesk font-semibold">Pametne spletne strani, povezane z AI asistenti.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-space-grotesk text-gray-800 max-w-2xl">
              Vaša stran ne bo samo lepa — odgovarjala bo strankam, avtomatizirala opravila in pridobivala posel, tudi
              ko spite.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-gray-800 transition-colors rounded-md shadow-md font-space-grotesk hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: "0 4px 14px rgba(255, 69, 0, 0.4)" }}
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
              Rezerviraj brezplačen posvet
            </a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md relative">
              {/* AI Robot image with responsive sizing */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-auto flex items-center justify-center">
                <Image
                  src="/veliki-ai-asistent-web-space.png"
                  alt="AI Assistant Robot"
                  width={400}
                  height={400}
                  className="w-auto h-auto max-h-full object-contain animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
