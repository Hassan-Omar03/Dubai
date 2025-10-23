import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { I18nProvider } from "../components/language"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Suspense } from "react"

const SITE_URL = "https://asrarsalon.com"
const BRAND = "Secrets of Elegance"
const PHONE = "+971509087548"
const OG_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-14%20at%208.34.33%20PM-HKQgcVSFjHcUyxm4SbKPSQXsWBBWQh.jpeg"
const SOCIALS = {
  whatsapp: "https://wa.me/971509087548",
  instagram: "https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw==",
  facebook: "https://www.facebook.com/share/1CbXYvhG9B/",
  tiktok: "https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1",
}
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.285540526624!2d55.43219557526517!3d25.39141397758609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f592de45d4ded%3A0x1f749e11e5631f9b!2sAida%20Tower%20-%20Ajman!5e0!3m2!1sen!2sae!4v1728970022874!5m2!1sen!2sae"

export const metadata: Metadata = {
  title: {
    default: "Secrets of Elegance | Beauty Salon Ajman",
    template: "%s | Secrets of Elegance",
  },
  description:
    "Secrets of Elegance — a premium beauty salon in Ajman offering manicure, pedicure, waxing, facials, threading, hair care, and more. Experience elegance, comfort, and professional beauty care.",
  keywords: [
    "beauty salon Ajman",
    "Secrets of Elegance",
    "manicure Ajman",
    "pedicure Ajman",
    "waxing Ajman",
    "facial Ajman",
    "threading Ajman",
    "hair care Ajman",
    "nail salon Ajman",
    "ladies salon Ajman",
    "spa Ajman",
    "eyebrow threading Ajman",
    "professional beauty care Ajman",
    "best beauty salon in Ajman",
  ],
  generator: "v0.app",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Secrets of Elegance | Beauty Salon Ajman",
    description:
      "Ajman’s trusted beauty salon for manicure, pedicure, waxing, facials, threading, and hair treatments. Contact us via WhatsApp or visit us for premium beauty services.",
    url: SITE_URL,
    siteName: "Secrets of Elegance",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Secrets of Elegance Beauty Salon Ajman",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secrets of Elegance | Beauty Salon Ajman",
    description:
      "Secrets of Elegance — Ajman-based salon for manicure, pedicure, facials, waxing, threading, and hair care. Contact us on WhatsApp for appointments!",
    images: [OG_IMAGE],
    site: "@SecretsOfElegance",
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: "/logo.png" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "og:phone_number": PHONE,
    "og:whatsapp_number": SOCIALS.whatsapp,
    "og:instagram": SOCIALS.instagram,
    "og:facebook": SOCIALS.facebook,
    "og:tiktok": SOCIALS.tiktok,
    "og:see_also:1": SOCIALS.instagram,
    "og:see_also:2": SOCIALS.facebook,
    "og:see_also:3": SOCIALS.tiktok,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

        {/* Geo/Local relevance */}
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman" />
        <meta name="ICBM" content="25.391414, 55.432196" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />

        {/* Identity links for socials */}
        <link rel="me" href={SOCIALS.whatsapp} />
        <link rel="me" href={SOCIALS.instagram} />
        <link rel="me" href={SOCIALS.facebook} />
        <link rel="me" href={SOCIALS.tiktok} />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: BRAND,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={query}`,
                "query-input": "required name=query",
              },
            }),
          }}
        />

        {/* Structured Data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}#business`,
              name: BRAND,
              url: SITE_URL,
              image: OG_IMAGE,
              telephone: PHONE,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aida Tower, Ajman",
                addressLocality: "Ajman",
                addressRegion: "Ajman",
                postalCode: "00000",
                addressCountry: "AE",
              },
              geo: { "@type": "GeoCoordinates", latitude: 25.391414, longitude: 55.432196 },
              hasMap: MAP_EMBED,
              sameAs: [SOCIALS.whatsapp, SOCIALS.instagram, SOCIALS.facebook, SOCIALS.tiktok],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "22:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: PHONE,
                contactType: "customer service",
                areaServed: "AE",
                availableLanguage: ["en", "ar"],
              },
            }),
          }}
        />

        {/* Structured Data: BeautySalon */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "@id": `${SITE_URL}#salon`,
              name: BRAND,
              url: SITE_URL,
              image: OG_IMAGE,
              telephone: PHONE,
              sameAs: [SOCIALS.whatsapp, SOCIALS.instagram, SOCIALS.facebook, SOCIALS.tiktok],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aida Tower, Ajman",
                addressLocality: "Ajman",
                addressCountry: "AE",
              },
              openingHours: "Mo-Su 10:00-22:00",
              priceRange: "$$",
              description:
                "Secrets of Elegance is a premium ladies salon in Ajman offering manicure, pedicure, waxing, facials, threading, hair care, and professional beauty treatments.",
              serviceOffered: [
                "Manicure",
                "Pedicure",
                "Waxing",
                "Facial",
                "Threading",
                "Hair Care",
                "Nail Art",
                "Beauty Treatments",
              ],
              isPartOf: { "@id": `${SITE_URL}#website` },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <I18nProvider>
            <SiteHeader />
            <main className="min-h-[70vh]">{children}</main>
            <SiteFooter />
          </I18nProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
