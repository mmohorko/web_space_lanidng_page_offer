import type React from "react"
import type { Metadata } from "next"
import { Space_Mono, Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

export const metadata: Metadata = {
  title: "Nova spletna stran + AI asistent v 5 dneh | Web Space",
  description:
    "Pridobi unikatno spletno stran, ki 24/7 generira stranke — z vgrajenim AI prodajnim agentom. Posebna ponudba: samo 1.200 € namesto 3.280 €. 100% garancija zadovoljstva.",
  openGraph: {
    title: "Nova spletna stran + AI asistent v 5 dneh | Web Space",
    description:
      "Pridobi unikatno spletno stran, ki 24/7 generira stranke — z vgrajenim AI prodajnim agentom. Posebna ponudba: samo 1.200 € namesto 3.280 €.",
    url: "https://ponudba.webspace.marketing/",
    siteName: "Web Space",
    images: [
      {
        url: "/web-space-offer-og.jpg",
        width: 1200,
        height: 630,
        alt: "Web Space - Nova spletna stran + AI asistent",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova spletna stran + AI asistent v 5 dneh | Web Space",
    description:
      "Pridobi unikatno spletno stran, ki 24/7 generira stranke — z vgrajenim AI prodajnim agentom. Posebna ponudba: samo 1.200 € namesto 3.280 €.",
    images: ["/web-space-offer-og.jpg"],
  },
  alternates: {
    canonical: "https://ponudba.webspace.marketing/",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZD2JCF7QQP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZD2JCF7QQP');
            `,
          }}
        />

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17058751554"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17058751554');
            `,
          }}
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              name: "Nova spletna stran + AI asistent",
              description: "Profesionalna spletna stran z AI asistentom, izdelana v 5 dneh",
              price: "1200",
              priceCurrency: "EUR",
              availability: "https://schema.org/LimitedAvailability",
              validThrough: "2024-12-31",
              seller: {
                "@type": "Organization",
                name: "Web Space",
                url: "https://webspace.marketing",
                telephone: "+386 70 661 104",
                email: "miha@webspace.marketing",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceMono.variable} ${inter.variable} ${bebasNeue.variable} font-sans`}>{children}</body>
    </html>
  )
}
