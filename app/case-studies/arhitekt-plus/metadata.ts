import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atelje Makovec - Študija primera | Web Space",
  description:
    "Oglejte si, kako smo za Atelje Makovec ustvarili moderno spletno stran in implementirali AI asistenta, ki je povečal povpraševanja za 85%.",
  openGraph: {
    title: "Atelje Makovec - Študija primera | Web Space",
    description:
      "Oglejte si, kako smo za Atelje Makovec ustvarili moderno spletno stran in implementirali AI asistenta, ki je povečal povpraševanja za 85%.",
    url: "https://webspace.si/case-studies/arhitekt-plus",
    siteName: "Web Space",
    images: [
      {
        url: "/atelje-makovec-website.png",
        width: 1200,
        height: 675,
        alt: "Atelje Makovec - moderna spletna stran za keramičarsko podjetje",
      },
    ],
    locale: "sl_SI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelje Makovec - Študija primera | Web Space",
    description:
      "Oglejte si, kako smo za Atelje Makovec ustvarili moderno spletno stran in implementirali AI asistenta, ki je povečal povpraševanja za 85%.",
    images: ["/atelje-makovec-website.png"],
  },
  alternates: {
    canonical: "https://webspace.si/case-studies/arhitekt-plus",
  },
}
