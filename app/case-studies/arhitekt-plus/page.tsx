import Link from "next/link"
import FallbackImage from "@/components/fallback-image"
import BackToTop from "@/components/back-to-top"
import AIChatBubble from "@/components/ai-chat-bubble"

export default function AteljeMAkovecPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with partial green background */}
      <header className="relative">
        {/* Green background that covers 1/3 of the width */}
        <div className="absolute top-0 left-0 h-full w-1/3 bg-primary-green"></div>

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
        <section className="bg-primary-green">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-mono leading-tight mb-6">Atelje Makovec</h1>
                <p className="text-xl mb-6">Spletna stran, AI asistent, SEO</p>
                <div className="flex space-x-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">Keramika</span>
                  <span className="inline-block bg-white px-3 py-1 text-sm">Obrtništvo</span>
                  <span className="inline-block bg-white px-3 py-1 text-sm">Kopalnice</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-white p-2">
                  <FallbackImage
                    src="/atelje-makovec-website.png"
                    fallbackSrc="/modern-architecture-portfolio.png"
                    alt="Atelje Makovec spletna stran - moderna zasnova za keramičarsko podjetje"
                    width={800}
                    height={450}
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
                    Atelje Makovec je keramičarsko podjetje, ki pred sodelovanjem z nami ni imelo spletne strani.
                    Potrebovali so spletno prisotnost, ki bi predstavila njihove storitve in omogočila strankam, da jih
                    lažje najdejo in kontaktirajo. Ker so bili zelo zaposleni s svojim obrtnim delom, so potrebovali
                    tudi rešitev, ki bi jim pomagala pri odgovarjanju na rutinska vprašanja strank.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-mono mb-3">Rešitev</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ustvarili smo moderno, odzivno spletno stran v okviru našega Starter paketa. Ker stranka ni imela
                    lastnega fotografskega materiala, smo z uporabo AI ustvarili vizualne elemente za njihovo spletno
                    stran. Implementirali smo tudi AI asistenta z edinstveno osebnostjo, ki odgovarja na vprašanja
                    strank v sproščenem, humornem slogu, značilnem za slovenske keramičarje.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200 my-12"></div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-mono mb-6">Proces</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-mono mb-3">1. Zasnova in načrtovanje</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Začeli smo s temeljitim pogovorom z lastnikom podjetja, da bi razumeli njihove storitve, ciljno
                        občinstvo in poslovne cilje. Skupaj smo določili strukturo spletne strani, ključne informacije,
                        ki jih je treba vključiti, in ton komunikacije, ki najbolje predstavlja njihovo blagovno znamko.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-mono mb-3">2. Oblikovanje in razvoj</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Ustvarili smo moderno, čisto oblikovano spletno stran, ki je popolnoma odzivna in deluje odlično
                        na vseh napravah. Ker stranka ni imela lastnih fotografij, smo z uporabo AI ustvarili vizualne
                        elemente, ki predstavljajo njihovo delo. Spletno stran smo optimizirali za iskalnike (SEO), s
                        poudarkom na lokalnih ključnih besedah, povezanih s keramičarskimi storitvami v Ljubljani in
                        okolici.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-mono mb-3">3. Implementacija AI asistenta</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Po želji stranke smo razvili AI asistenta z edinstveno osebnostjo. Asistent, imenovan "mojster
                        Maks", komunicira v sproščenem, humornem slogu, značilnem za slovenske keramičarje. Naučili smo
                        ga vseh podrobnosti o storitvah podjetja, tipičnih projektih in postopkih dela. Asistent je
                        zasnovan tako, da zbira vse potrebne informacije od potencialnih strank, kar omogoča podjetju,
                        da pripravi natančnejše ponudbe brez dodatnih klicev ali sporočil.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-mono mb-6">Rezultati</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">+85%</div>
                      <p className="text-gray-600">Povečanje povpraševanj</p>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">-40%</div>
                      <p className="text-gray-600">Zmanjšanje časa za odgovarjanje na rutinska vprašanja</p>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="text-3xl font-mono mb-2">+70%</div>
                      <p className="text-gray-600">Izboljšana konverzija zaradi hitrejših odgovorov</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Nova spletna stran je Ateljeju Makovec omogočila spletno prisotnost, ki jo prej niso imeli, kar je
                    privedlo do znatnega povečanja povpraševanj. AI asistent je drastično zmanjšal čas, ki ga lastnik
                    porabi za odgovarjanje na rutinska vprašanja, kar mu omogoča, da se osredotoči na svoje obrtno delo.
                    Poleg tega je asistent izboljšal konverzijo, saj stranke takoj dobijo odgovore na svoja vprašanja,
                    namesto da bi čakale na odgovor.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-mono mb-6">AI Asistent v akciji</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    AI asistent "mojster Maks" je zasnovan tako, da komunicira v sproščenem, humornem slogu, značilnem
                    za slovenske keramičarje. Zbira ključne informacije od potencialnih strank, kot so velikost
                    prostora, lokacija, časovni okvir in preference glede materialov. Spodaj je primer pogovora z
                    asistentom:
                  </p>

                  <div className="bg-[#2c3e1e] text-white p-6 rounded-lg mb-8">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#1a2412] flex-shrink-0 mr-3"></div>
                      <div className="p-3 bg-[#1a2412] rounded-lg rounded-tl-none">
                        <p>Serbus, sem mojster Maks, AI pomočnik mojstra Mihe! Kje te čevelj žuli?</p>
                      </div>
                    </div>

                    <div className="flex items-start justify-end mb-4">
                      <div className="p-3 bg-[#1a2412] rounded-lg rounded-tr-none">
                        <p>Zanima me prenova kopalnice. Kako hitro jo lahko uredite in koliko bi stalo?</p>
                      </div>
                    </div>

                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#1a2412] flex-shrink-0 mr-3"></div>
                      <div className="p-3 bg-[#1a2412] rounded-lg rounded-tl-none">
                        <p>
                          Aha, prenova kopalnice! Klasičen projekt, kjer se res vidi razlika, ko je vse na novo
                          narejeno. Gremo lepo po vrsti, da ugotoviva, kaj bi točno potrebovali. Evo nekaj vprašanj:
                        </p>
                        <p className="mt-2">
                          Gre za prenovo obstoječe kopalnice ali kakšno čisto novo (npr. v novogradnji)?
                        </p>
                        <p className="mt-2">Koliko je približno kvadratov?</p>
                        <p className="mt-2">Se nahajate v Ljubljani ali okolici (Miha dela samo tukaj)?</p>
                        <p className="mt-2">Imate že izbrane ploščice ali jih še iščete?</p>
                        <p className="mt-2">Kdaj bi želeli začeti – a vam kaj gori pod nogami, ali imate čas?</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Ta pristop omogoča podjetju, da pridobi vse potrebne informacije za pripravo natančne ponudbe, še
                    preden stopijo v neposreden stik s stranko. Asistent je naučen tudi, da odgovarja na pogosta
                    vprašanja o materialih, postopkih dela, časovnih okvirih in cenah, kar dodatno razbremeni lastnika.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-mono mb-6">Mnenje stranke</h3>
                  <div className="bg-gray-50 p-8 border-l-4 border-primary-green">
                    <p className="text-gray-600 italic mb-4">
                      "Prej sploh nisem imel spletne strani, zdaj pa me stranke najdejo same! Najbolj sem navdušen nad
                      AI asistentom, ki govori točno tako, kot bi govoril jaz. Prihrani mi ogromno časa, ker ne rabim
                      več odgovarjati na ista vprašanja znova in znova. Zdaj se lahko osredotočim na svoje delo, medtem
                      ko 'mojster Maks' poskrbi za začetno komunikacijo s strankami. Investicija v Starter paket se mi
                      je povrnila že v prvem mesecu."
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                      <div>
                        <div className="font-medium">Miha Makovec</div>
                        <div className="text-sm text-gray-500">Lastnik, Atelje Makovec</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-green py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-mono mb-6">Želite podobno rešitev za vaše podjetje?</h2>
              <p className="text-xl mb-8">
                Kontaktirajte nas za brezplačno svetovanje o tem, kako lahko spletna stran in AI asistent pomagata
                vašemu podjetju.
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
                <Link href="/case-studies/salon-lepote-mirage" className="block group">
                  <div className="bg-white p-6 shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-2 w-full bg-primary-yellow mb-6"></div>
                    <div className="aspect-video bg-gray-100 mb-6">
                      <FallbackImage
                        src="/salon-luna-website-screenshot.jpg"
                        alt="Salon Luna spletna stran - elegantna zasnova za lepotni salon z rezervacijskim sistemom"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        fallbackSrc="/elegant-salon-interior.png"
                      />
                    </div>
                    <h3 className="text-xl font-mono mb-2">Salon Luna</h3>
                    <p className="text-gray-600 mb-4">Spletna stran, rezervacijski sistem</p>
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
