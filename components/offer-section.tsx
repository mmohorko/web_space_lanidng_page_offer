"use client"

import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"

export default function OfferSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-primary-yellow/10 to-primary-green/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ponudba, ki gradi tvoj posel – tudi ko spiš
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              Unikatna spletna stran + AI asistent, ki zbira stranke 24/7 – ti pa se ne premakneš s kavča
            </p>
          </div>

          <div className="bg-white shadow-lg border border-gray-100 p-8 md:p-10 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary-purple">Kaj dobiš:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg">
                  <span className="font-bold">Profesionalno, unikatno spletno stran</span> (brez predlog, brez navlake),
                  zasnovano za to, da iz obiskovalcev naredi stranke.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg">
                  <span className="font-bold">Pametnega AI asistenta</span>, ki odgovarja na vprašanja, sprejema
                  rezervacije in zbira kontakte – tudi ob 3h zjutraj.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg">
                  <span className="font-bold">Tvoj logotip, besedila, SEO in domena?</span> Vse uredimo mi.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg border-t-4 border-primary-purple">
              <div className="flex items-center mb-4">
                <div className="bg-primary-purple bg-opacity-20 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-primary-purple" />
                </div>
                <h3 className="text-xl font-bold">Zakaj deluje:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>Ekipa z 17+ leti marketinških izkušenj in več kot 2 leti dela z AI avtomatizacijami.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>Preizkušeno pri malih in srednjih lokalnih podjetjih.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>AI je naučen na tvojem poslu, ne iz generičnih odgovorov z interneta.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg border-t-4 border-primary-yellow">
              <div className="flex items-center mb-4">
                <div className="bg-primary-yellow bg-opacity-20 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-primary-yellow" />
                </div>
                <h3 className="text-xl font-bold">Kako hitro:</h3>
              </div>
              <p className="text-gray-700">Spletna stran je gotova v 5 delovnih dneh.</p>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg border-t-4 border-primary-green">
              <div className="flex items-center mb-4">
                <div className="bg-primary-green bg-opacity-20 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold">Kako enostavno:</h3>
              </div>
              <p className="text-gray-700">Ti poveš, kaj delaš – mi naredimo vse ostalo.</p>
            </div>
          </div>

          <div className="bg-primary-yellow shadow-lg p-8 rounded-xl mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">100% brez tveganja:</h3>
            </div>
            <p className="text-center text-lg font-medium">
              Če z rezultatom ne boš zadovoljen, dobiš denar nazaj. Brez izgovorov, brez komplikacij.
            </p>
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
              className="inline-flex items-center bg-black text-white px-8 py-4 text-xl font-bold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Rezerviraj brezplačen posvet
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
