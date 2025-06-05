import FallbackImage from "@/components/fallback-image"
import Link from "next/link"
import BackToTop from "../../../components/back-to-top"
import AIChatBubble from "../../../components/ai-chat-bubble"

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with partial yellow background */}
      <header className="relative">
        {/* Yellow background that covers 1/3 of the width */}
        <div className="absolute top-0 left-0 h-full w-1/3 bg-primary-yellow"></div>

        {/* Main header content */}
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center h-24">
            <Link href="/" className="font-mono text-xl z-10 flex items-center">
              <span className="font-mono font-bold tracking-wider text-2xl logo-text">Web Space</span>
            </Link>

            <nav className="hidden md:flex ml-auto space-x-12">
              <Link
                href="/#storitve"
                className="nav-font text-xl tracking-wider hover:text-primary-purple transition-colors"
              >
                STORITVE
              </Link>
              <Link
                href="/#portfolio"
                className="nav-font text-xl tracking-wider hover:text-primary-purple transition-colors"
              >
                PORTFOLIO
              </Link>
              <Link
                href="/#o-nas"
                className="nav-font text-xl tracking-wider hover:text-primary-purple transition-colors"
              >
                O NAS
              </Link>
              <Link
                href="/#cenik"
                className="nav-font text-xl tracking-wider hover:text-primary-purple transition-colors"
              >
                CENIK
              </Link>
              <Link
                href="/#kontakt"
                className="nav-font text-xl tracking-wider hover:text-primary-purple transition-colors"
              >
                KONTAKT
              </Link>
            </nav>

            <button className="md:hidden ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="container mx-auto px-4 relative">
          <div className="w-1/2 h-0.5 bg-black my-2 ml-auto"></div>
          <div className="w-3/4 h-0.5 bg-black my-2"></div>
          <div className="w-full h-0.5 bg-black my-2"></div>
          <div className="w-2/3 h-0.5 bg-black my-2 ml-auto"></div>
          <div className="w-full h-px dotted-line my-4"></div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-primary-yellow">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-mono leading-tight mb-6">Salon Luna</h1>
                <p className="text-xl mb-6">Spletna stran, rezervacijski sistem</p>
                <div className="flex space-x-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">Lepota</span>
                  <span className="inline-block bg-white px-3 py-1 text-sm">Rezervacije</span>
                  <span className="inline-block bg-white px-3 py-1 text-sm">Branding</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-white p-2">
                  <FallbackImage
                    src="/salon-luna-website-screenshot.jpg"
                    fallbackSrc="/elegant-salon-interior.png"
                    alt="Salon Luna spletna stran - elegantna zasnova za lepotni salon z rezervacijskim sistemom"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-mono mb-8">Pregled projekta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-mono mb-3">Izziv</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Salon Luna je nov lepotni salon, ki je potreboval sodobno spletno stran z rezervacijskim sistemom.
                    Želeli so predstaviti svoje storitve, omogočiti strankam enostavno rezervacijo terminov in ustvariti
                    prepoznavno blagovno znamko.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-mono mb-3">Rešitev</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ustvarili smo elegantno spletno stran z intuitivnim rezervacijskim sistemom, ki omogoča strankam
                    enostavno rezervacijo terminov. Spletna stran je optimizirana za mobilne naprave in vključuje
                    predstavitev storitev, cenik in galerijo.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200 my-12"></div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-mono mb-6">Rezultati</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">+120%</div>
                      <p className="text-gray-600">Povečanje spletnih rezervacij</p>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">+85%</div>
                      <p className="text-gray-600">Povečanje obiska spletne strani</p>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">-30%</div>
                      <p className="text-gray-600">Zmanjšanje administrativnega dela</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Nova spletna stran z rezervacijskim sistemom je Salonu Luna omogočila učinkovitejše poslovanje in
                    boljšo uporabniško izkušnjo za stranke. Spletna stran je postala ključno orodje za privabljanje
                    novih strank in ohranjanje obstoječih.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-mono mb-6">Mnenje stranke</h3>
                  <div className="bg-gray-50 p-8 border-l-4 border-primary-yellow">
                    <p className="text-gray-600 italic mb-4">
                      "Spletna stran, ki jo je ustvaril Web Space, je popolnoma spremenila naše poslovanje.
                      Rezervacijski sistem je poenostavil naše delo in izboljšal izkušnjo naših strank. Dizajn je
                      eleganten in odraža identiteto našega salona. Zelo smo zadovoljni s sodelovanjem in rezultati."
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                      <div>
                        <div className="font-medium">Ana Kovač</div>
                        <div className="text-sm text-gray-500">Lastnica, Salon Luna</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-yellow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-mono mb-6">Potrebujete spletno stran z rezervacijskim sistemom?</h2>
              <p className="text-xl mb-8">
                Kontaktirajte nas za brezplačno svetovanje o tem, kako lahko izboljšamo vaše poslovanje.
              </p>
              <a
                href="/#kontakt"
                className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors"
              >
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </section>

        {/* More Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-mono mb-12 text-center">Več projektov</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/case-studies/kavarna-aroma" className="block group">
                  <div className="bg-white p-6 shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-2 w-full bg-primary-peach mb-6"></div>
                    <div className="aspect-video bg-gray-100 mb-6">
                      <FallbackImage
                        src="/web-space-website-screenshot.jpg"
                        alt="Web Space spletna stran - moderna zasnova za digitalne agencije"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        fallbackSrc="/modern-webpage-design.png"
                      />
                    </div>
                    <h3 className="text-xl font-mono mb-2">Web Space</h3>
                    <p className="text-gray-600 mb-4">Spletna stran, logotip, besedila</p>
                    <div className="text-black group-hover:underline inline-flex items-center">
                      Preberi študijo primera
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5L19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/arhitekt-plus" className="block group">
                  <div className="bg-white p-6 shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-2 w-full bg-primary-green mb-6"></div>
                    <div className="aspect-video bg-gray-100 mb-6">
                      <FallbackImage
                        src="/tapsa-salon-website-screenshot.jpg"
                        alt="Ta & ŠA spletna stran - moderna zasnova za frizerski salon s portfoliom"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        fallbackSrc="/modern-hair-salon.png"
                      />
                    </div>
                    <h3 className="text-xl font-mono mb-2">Ta & ŠA</h3>
                    <p className="text-gray-600 mb-4">Spletna stran, portfolio, logotip</p>
                    <div className="text-black group-hover:underline inline-flex items-center">
                      Preberi študijo primera
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5L19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="font-mono text-xl mb-4 md:mb-0">Web Space</div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-sm mb-4">KONTAKT</h4>
                <p className="text-gray-600 mb-2">
                  <span className="sr-only">Email:</span>
                  <img
                    src="/contact-email.png"
                    alt="Kontaktni email"
                    width={180}
                    height={20}
                    className="inline-block"
                  />
                </p>
                <p className="text-gray-600">+386 70 661 104</p>
              </div>
              <div>
                <h4 className="font-mono text-sm mb-4">LOKACIJA</h4>
                <p className="text-gray-600 mb-2">Antoličičeva 14</p>
                <p className="text-gray-600">2000 Maribor, Slovenija</p>
              </div>
              <div>
                <h4 className="font-mono text-sm mb-4">DELOVNI ČAS</h4>
                <p className="text-gray-600 mb-2">Pon - Pet: 9:00 - 17:00</p>
                <p className="text-gray-600">Sob - Ned: Zaprto</p>
              </div>
            </div>
            <p className="text-gray-600 text-center text-sm">© 2023 Web Space. Vse pravice pridržane.</p>
          </div>
        </div>
      </footer>
      <BackToTop />
      <AIChatBubble />
    </div>
  )
}

export default Page
