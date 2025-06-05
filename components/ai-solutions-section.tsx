"use client"

import { Bot, MessageSquare, Calendar, ShoppingCart } from "lucide-react"

export default function AISolutionsSection() {
  return (
    <section id="ai-resitve" className="bg-gray-50 section-spacing">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6 text-center">AI Rešitve</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            Nadgradite vašo spletno stran s pametnimi AI asistenti, ki so vedno na voljo za vaše stranke
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 shadow-sm border-t-4 border-primary-purple">
              <div className="flex items-center mb-6">
                <div className="bg-primary-purple bg-opacity-20 p-3 rounded-full mr-4">
                  <Bot className="h-6 w-6 text-primary-purple" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-mono">Pametni AI Asistenti</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Naši AI asistenti so zasnovani tako, da se prilagodijo vašemu podjetju in blagovni znamki. Delujejo 24/7
                in so vedno pripravljeni pomagati vašim strankam.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Prilagojeni vašemu podjetju in storitvam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Delujejo v slovenskem jeziku</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Enostavna implementacija na vašo obstoječo spletno stran</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm border-t-4 border-primary-yellow">
              <div className="flex items-center mb-6">
                <div className="bg-primary-yellow bg-opacity-20 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-primary-yellow" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-mono">Podpora Strankam</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI asistenti lahko odgovarjajo na pogosta vprašanja, nudijo informacije o vaših storitvah in rešujejo
                enostavne težave strank.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Takojšnji odgovori na pogosta vprašanja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Zmanjšanje obremenitve vaše podporne ekipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Izboljšana uporabniška izkušnja</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm border-t-4 border-primary-green">
              <div className="flex items-center mb-6">
                <div className="bg-primary-green bg-opacity-20 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary-green" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-mono">Rezervacije in Termini</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI asistenti lahko pomagajo strankam pri rezervaciji terminov, preverjanju razpoložljivosti in
                pošiljanju opomnikov.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-green mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Enostavna rezervacija terminov</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Avtomatsko preverjanje razpoložljivosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Integracija z vašim obstoječim sistemom</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm border-t-4 border-primary-peach">
              <div className="flex items-center mb-6">
                <div className="bg-primary-peach bg-opacity-20 p-3 rounded-full mr-4">
                  <ShoppingCart className="h-6 w-6 text-primary-peach" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-mono">Prodajna Podpora</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI asistenti lahko pomagajo strankam pri izbiri izdelkov ali storitev, odgovarjajo na vprašanja o cenah
                in vodijo stranke skozi nakupni proces.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-peach mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Personalizirane priporočitve izdelkov</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-peach mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Odgovori na vprašanja o izdelkih in storitvah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-peach mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>Povečanje konverzij in prodaje</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-mono mb-4 text-center">Kako deluje?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary-purple bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-mono mb-2">Analiza potreb</h4>
                <p className="text-sm text-gray-600">
                  Analiziramo vaše potrebe in določimo, kako lahko AI asistent najbolje pomaga vašemu podjetju.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-purple bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-mono mb-2">Prilagoditev in učenje</h4>
                <p className="text-sm text-gray-600">
                  Prilagodimo AI asistenta vašemu podjetju in ga naučimo o vaših storitvah, izdelkih in pogostih
                  vprašanjih.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-purple bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-mono mb-2">Implementacija</h4>
                <p className="text-sm text-gray-600">
                  Implementiramo AI asistenta na vašo spletno stran in zagotovimo, da deluje brezhibno.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#kontakt"
                className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
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
                Zahtevajte demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
