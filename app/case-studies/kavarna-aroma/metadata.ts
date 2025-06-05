import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Space - Študija primera | Web Space",
  description:
    "Oglejte si, kako smo za Web Space ustvarili sodobno spletno stran z elegantnim logotipom in prepričljivimi besedili, ki je povečala obisk za 150%.",
  openGraph: {
    title: "Web Space - Študija primera | Web Space",
    description:
      "Oglejte si, kako smo za Web Space ustvarili sodobno spletno stran z elegantnim logotipom in prepričljivimi besedili, ki je povečala obisk za 150%.",
    url: "https://webspace.si/case-studies/kavarna-aroma",
    siteName: "Web Space",
    images: [
      {
        url: "/web-space-website-screenshot.jpg",
        width: 1200,
        height: 630,
        alt: "Web Space - moderna spletna stran za digitalno agencijo",
      },
    ],
    locale: "sl_SI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Space - Študija primera | Web Space",
    description:
      "Oglejte si, kako smo za Web Space ustvarili sodobno spletno stran z elegantnim logotipom in prepričljivimi besedili, ki je povečala obisk za 150%.",
    images: ["/web-space-website-screenshot.jpg"],
  },
  alternates: {
    canonical: "https://webspace.si/case-studies/kavarna-aroma",
  },
}
