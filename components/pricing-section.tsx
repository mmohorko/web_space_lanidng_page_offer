"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("monthly")

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title mb-6 text-center">Cenik</h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center">Transparentne cene brez skritih stroškov</p>

      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 via-primary-yellow/20 to-primary-green/20 rounded-xl blur-xl opacity-70"></div>
        <div className="relative bg-white rounded-xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-mono mb-10 text-center">Paketi</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Package */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="h-1.5 w-full bg-primary-yellow absolute top-0 left-0 right-0"></div>
              <div className="p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-mono mb-3">Starter</h3>
                  <div className="text-4xl font-mono mb-8">1.200 €</div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Do 5 strani (Domov, Storitve, O nas, Novice, Kontakt)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Pisanje besedil + oblikovanje logotipa</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>On-site SEO in popolna mobilna odzivnost</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Google mapa z navodili za pot</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Preprost kontaktni obrazec</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-yellow/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-yellow/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Izbirno: AI Asistant chat bot (+ 250 € nastavitev / 29 € mesec)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-gray-600 pb-6 border-t pt-6 mb-6 min-h-[60px] flex items-center">
                    <p>Rok izdelave: 14 dni | Brez mesečnih stroškov</p>
                  </div>
                  <a
                    href="#kontakt"
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
                    className="block w-full text-center bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                  >
                    Izberi paket
                  </a>
                </div>
              </div>
            </div>

            {/* Growth Package */}
            <div className="bg-white rounded-xl border-2 border-primary-purple shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-primary-purple text-white px-6 py-1.5 text-sm font-medium rounded-bl-lg z-10">
                Priljubljeno
              </div>
              <div className="h-1.5 w-full bg-primary-purple absolute top-0 left-0 right-0"></div>
              <div className="p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-mono mb-3">Growth</h3>
                  <div className="text-4xl font-mono mb-8">2.400 €</div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Vse iz Starterja +</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Ghost blog (1-letno gostovanje vključeno)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Galerija projektov/fotografij</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>AI kontaktni obrazec (ocena leada + samodejni odgovor)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Do 10 strani, 2 jezika</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-purple/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-purple/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Mesečno: 25 € za AI-obrazec (prva 3 m brezplačno)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-gray-600 pb-6 border-t pt-6 mb-6 min-h-[60px] flex items-center">
                    <p>Rok izdelave: 21 dni</p>
                  </div>
                  <a
                    href="#kontakt"
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
                    className="block w-full text-center bg-primary-purple text-white py-4 rounded-lg hover:bg-primary-purple/90 transition-colors duration-300 font-medium"
                  >
                    Izberi paket
                  </a>
                </div>
              </div>
            </div>

            {/* Prime Package */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="h-1.5 w-full bg-primary-green absolute top-0 left-0 right-0"></div>
              <div className="p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-mono mb-3">Prime</h3>
                  <div className="text-4xl font-mono mb-8">4.500 €</div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Vse iz Growtha +</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Napredne interakcije (animacije, zemljevidi po meri, kompleksni obrazci)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>30-dnevni Conversion Boost (toplotne karte + 1 CRO izboljšava)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Galerija z iskanjem / filtriranjem</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Do 20 strani</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-green/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-green/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span>Mesečno: 45 € za chatbot + AI-obrazec (prvi 3 m brezplačno)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-gray-600 pb-6 border-t pt-6 mb-6 min-h-[60px] flex items-center">
                    <p>Rok izdelave: 30 dni | Prioritetna podpora (&lt; 24 h)</p>
                  </div>
                  <a
                    href="#kontakt"
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
                    className="block w-full text-center bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                  >
                    Izberi paket
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-mono mb-8">Doplačila (opcijsko)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 font-mono text-lg">Dodatek</th>
                    <th className="text-right py-4 font-mono text-lg">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-100/70 transition-colors duration-150">
                    <td className="py-4 text-gray-700">Dodatni jezik</td>
                    <td className="py-4 text-right font-mono">200 €</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100/70 transition-colors duration-150">
                    <td className="py-4 text-gray-700">Podaljšanje Ghost gostovanja (po 1. letu)</td>
                    <td className="py-4 text-right font-mono">80 €/leto</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100/70 transition-colors duration-150">
                    <td className="py-4 text-gray-700">SEO & vsebinski paket</td>
                    <td className="py-4 text-right font-mono">400 €/trim.</td>
                  </tr>
                  <tr className="hover:bg-gray-100/70 transition-colors duration-150">
                    <td className="py-4 text-gray-700">Vzdrževanje & CRO retainer</td>
                    <td className="py-4 text-right font-mono">600 €/mesec</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#kontakt"
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
              className="inline-block bg-black text-white px-10 py-5 font-medium hover:bg-gray-800 transition-colors duration-300 rounded-lg text-lg"
            >
              Zahtevajte ponudbo
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-mono mb-10 text-center">Pogosta vprašanja</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <h4 className="text-xl font-mono mb-4">Ali so v ceno vključene slike?</h4>
            <p className="text-gray-600 leading-relaxed">
              Da, v vseh paketih so vključene osnovne stock fotografije. Za profesionalno fotografiranje na lokaciji se
              zaračuna dodatno.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <h4 className="text-xl font-mono mb-4">Kako poteka plačilo?</h4>
            <p className="text-gray-600 leading-relaxed">
              Ob začetku projekta se plača 50% avans, preostalih 50% pa ob zaključku projekta in predaji spletne strani.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <h4 className="text-xl font-mono mb-4">Ali nudite podporo po zaključku projekta?</h4>
            <p className="text-gray-600 leading-relaxed">
              Da, po zaključku projekta nudimo 30-dnevno brezplačno podporo. Za nadaljnjo podporo in vzdrževanje
              ponujamo različne pakete, ki jih lahko najdete v razdelku Doplačila.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <h4 className="text-xl font-mono mb-4">Koliko časa traja izdelava spletne strani?</h4>
            <p className="text-gray-600 leading-relaxed">
              Čas izdelave je odvisen od izbranega paketa in kompleksnosti projekta. Starter paket je običajno končan v
              14 dneh, Growth v 21 dneh, Prime pa v 30 dneh. Natančen časovni okvir določimo po začetnem sestanku.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
