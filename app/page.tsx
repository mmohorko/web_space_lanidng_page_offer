"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Check, Clock, Shield, Star, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({})

  // Countdown timer - set to end of month
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 1, 0) // End of current month
    targetDate.setHours(23, 59, 59, 999)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus({
        success: true,
        message: "Hvala! Kontaktirali vas bomo v 24 urah za dogovor o brezplačnem posvetu.",
      })

      setFormData({ name: "", email: "", phone: "", description: "" })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Prišlo je do napake. Prosimo, poskusite znova ali nas pokličite.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 z-40 p-4">
        <Image
          src="/web-space-logo-black.png"
          alt="Web Space"
          width={120}
          height={32}
          className="h-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </header>
      {/* Sticky CTA Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <button
          onClick={scrollToForm}
          className="w-full bg-black text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-800 transition-colors"
        >
          Rezerviraj brezplačen posvet
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-purple/10 via-primary-yellow/10 to-primary-green/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust badges */}
            <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="mr-2">🇸🇮</span>
                Made in Slovenia
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                17 let izkušenj
              </span>
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                AI vključeno
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nova spletna stran + AI asistent.
              <br />
              <span className="text-primary-purple">V 5 dneh. Brez komplikacij.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Pridobi unikatno spletno stran, ki 24/7 generira stranke — z vgrajenim AI prodajnim agentom.
            </p>

            <button
              onClick={scrollToForm}
              className="bg-red-600 text-white px-8 py-4 text-xl font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg mb-8 animate-pulse"
            >
              🔥 Prihrani 2.080 € → samo 5 mest!
            </button>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-700">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Vse naredimo mi
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                100% garancija zadovoljstva
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Možnost obročnega plačila
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Reveal Strip */}
      <section className="bg-primary-yellow py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Posebna ponudba: Prihrani 2.080 € – samo 1.200 € namesto 3.280 €
            </p>
            <p className="text-lg">Na voljo samo 5 mest ta mesec. AI uporaba brezplačna prva 2 meseca.</p>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vključeno:</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Profesionalna spletna stran po meri",
                  description: "Izdelana v 5 dneh, brez predlog",
                  value: "900 €",
                  icon: "🎨",
                },
                {
                  title: "Pisanje prodajnih besedil",
                  description: "Vsebine optimizirane za konverzije",
                  value: "450 €",
                  icon: "✍️",
                },
                {
                  title: "AI Chat Asistent (24/7 podpora za obiskovalce)",
                  description: "Naučen na vsebini podjetja",
                  value: "400 €",
                  icon: "🤖",
                },
                {
                  title: "AI Kontaktni obrazec z avtomatskim odzivom",
                  description: "Pošlje personalizirano sporočilo glede na povpraševanje",
                  value: "300 €",
                  icon: "📧",
                },
                {
                  title: "Osnovna SEO optimizacija",
                  description: "Hitrost, naslovi, meta opisi, osnovne ključne besede",
                  value: "250 €",
                  icon: "🔍",
                },
                {
                  title: "Sistem za zbiranje kontaktov",
                  description: "Povezava z Mailchimp, Brevo, Airtable ali Google Sheets",
                  value: "150 €",
                  icon: "📊",
                },
                {
                  title: "Mobilno prilagojena zasnova (responsive)",
                  description: "Deluje na vseh napravah",
                  value: "250 €",
                  icon: "📱",
                },
                {
                  title: "3 revizije dizajna v ceni",
                  description: "Prilagodimo, dokler ni popolno",
                  value: "150 €",
                  icon: "🔄",
                },
                {
                  title: "Tehnična podpora 3 mesece (email + WhatsApp)",
                  description: "",
                  value: "150 €",
                  icon: "🛠️",
                },
                {
                  title: "Mesečno poročilo o uspešnosti (3x PDF)",
                  description: "",
                  value: "90 €",
                  icon: "📈",
                },
                {
                  title: "Integracija z Google Analytics + Search Console",
                  description: "",
                  value: "50 €",
                  icon: "📊",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        {item.description && <p className="text-gray-600 mt-1">{item.description}</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-primary-purple">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Total Value Summary */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-400 line-through">3.280 €</span>
                  <span className="text-3xl md:text-4xl font-bold text-primary-purple">Samo 1.200 €</span>
                </div>
                <button
                  onClick={scrollToForm}
                  className="bg-red-600 text-white px-8 py-4 text-xl font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg animate-pulse"
                >
                  🔥 Prihrani 2.080 € → samo 5 mest!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">🎁 Bonusi</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "BONUS 1: Brezplačna domena (.com) in gostovanje 1 leto",
                  value: "50 €",
                  icon: "🌐",
                },
                {
                  title: "BONUS 2: Premium fotografije (do 10 kosov)",
                  value: "100 €",
                  icon: "📸",
                },
                {
                  title: "BONUS 3: Posodobitev dizajna po 6 mesecih (1 ura)",
                  value: "100 €",
                  icon: "🎨",
                },
                {
                  title: "BONUS 4: 2 meseca AI uporabe brezplačno",
                  description: "Po tem 20EUR/mes storošek za API",
                  value: "40 €",
                  icon: "🤖",
                },
              ].map((bonus, index) => (
                <div key={index} className="bg-white border-2 border-primary-yellow rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{bonus.icon}</span>
                    <span className="text-xl font-bold text-primary-purple">{bonus.value}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{bonus.title}</h3>
                  {bonus.description && <p className="text-gray-600 text-sm">{bonus.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Total Value Strip */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-2xl md:text-3xl mb-4">
              <span className="line-through text-gray-400">Skupna vrednost: ~3.280 €~</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-6 text-primary-yellow">Tvoja cena: samo 1.200 €</div>
            <div className="space-y-2 text-lg">
              <div className="flex items-center justify-center">
                <span className="mr-2">💥</span>
                100% garancija zadovoljstva ali denar nazaj
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">🕐</span>
                Samo 5 mest na voljo ta mesec
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">💳</span>
                Možnost obročnega plačila do 12 mesecev
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mt-8 bg-primary-purple/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Ponudba velja še:</h3>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm">dni</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm">ur</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm">minut</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm">sekund</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kaj pravijo naše stranke</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src="/miha-makovec-avatar.png"
                    alt="Miha Makovec"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Miha Makovec</h4>
                    <p className="text-gray-600 text-sm">Atelje Makovec</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Prej sploh nisem imel spletne strani, zdaj pa me stranke najdejo same! AI asistent mi prihrani
                  ogromno časa. Investicija se mi je povrnila že v prvem mesecu."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src="/ana-kovac-avatar.png"
                    alt="Ana Kovač"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Ana Kovač</h4>
                    <p className="text-gray-600 text-sm">Salon Luna</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Spletna stran je popolnoma spremenila naše poslovanje. Rezervacijski sistem je poenostavil naše delo
                  in izboljšal izkušnjo naših strank. Zelo smo zadovoljni!"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pogosta vprašanja</h2>

            <div className="space-y-4">
              {[
                {
                  question: "Kaj, če mi dizajn ne bo všeč?",
                  answer:
                    "Nudimo 100% garancijo zadovoljstva. Če z rezultatom ne boste zadovoljni, vam vrnemo celoten znesek. Brez izgovorov, brez komplikacij.",
                },
                {
                  question: "Kaj pomeni AI strošek po 2 mesecih?",
                  answer:
                    "Po dveh brezplačnih mesecih se zaračuna strošek vzdrževanja bota in AI tokenov, ki jih porabi (~20 €/mesec). To pokriva API stroške in vzdrževanje AI funkcionalnosti.",
                },
                {
                  question: "Ali lahko plačam na obroke?",
                  answer:
                    "Da, ponujamo obročno plačilo do 12 mesecev brez obresti. Možnosti plačila se dogovorimo na brezplačnem posvetu.",
                },
                {
                  question: "Nudite podporo po izdelavi?",
                  answer:
                    "Da, prve 3 mesece nudimo brezplačno podporo. Po tem obdobju nudimo podporo po potrebi - plačano na uro dela. 1-2 manjša popravka na mesec sta brezplačna.",
                },
                {
                  question: "Ali lahko stran urejam sam?",
                  answer:
                    "Spletne strani razvijamo preko svojih rešitev. Za manjše popravke in dopolnitve poskrbimo brezplačno, za večje spremembe se plača cena dela na uro.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-primary-yellow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Rezerviraj brezplačen posvet</h2>
              <p className="text-xl">Brez tveganja. Brez komplikacij. Samo rezultati.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Ime in priimek *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="Vaše ime"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    E-pošta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="vas@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Telefonska številka *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="+386 XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">
                    Opis strani (opcijsko)
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="Opišite, kakšno spletno stran potrebujete..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Pošiljanje..." : "Rezerviraj brezplačen posvet"}
                </button>

                {submitStatus.message && (
                  <div
                    className={`p-4 rounded-lg ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>

            <div className="text-center mt-8 space-y-4">
              <p className="text-gray-700">Ali pa nas pokličite direktno:</p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <a
                  href="tel:+38670661104"
                  className="flex items-center text-lg font-bold hover:text-primary-purple transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +386 70 661 104
                </a>
                <a
                  href="mailto:miha@webspace.marketing"
                  className="flex items-center text-lg font-bold hover:text-primary-purple transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  miha@webspace.marketing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/web-space-logo-black.png"
                alt="Web Space Logo"
                width={150}
                height={40}
                className="h-auto mx-auto filter invert"
              />
            </div>
            <p className="text-gray-400">© 2024 Web Space. Vse pravice pridržane.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
