import ServicesPageClient from "./services-client"
import Head from "next/head"
import { JsonLd } from "../../components/json-ld"

export const metadata = {
  title: "Services | Secrets of Elegance",
  description:
    "Discover our premium beauty services in Ajman — manicure, pedicure, waxing, facials, threading, hair care, and more at Secrets of Elegance.",
  // Extra metadata (kept here so App Router can pick them up too)
  openGraph: {
    title: "Services | Secrets of Elegance Ajman",
    description:
      "Discover Secrets of Elegance's beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. Contact +971509087548.",
    url: "https://secretof-elegance.vercel.app/services",
    siteName: "Secrets of Elegance",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-14%20at%208.34.33%20PM-HKQgcVSFjHcUyxm4SbKPSQXsWBBWQh.jpeg",
        width: 1200,
        height: 630,
        alt: "Secrets of Elegance — Beauty Salon in Ajman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Secrets of Elegance Ajman",
    description:
      "Explore our beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. WhatsApp +971509087548.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-14%20at%208.34.33%20PM-HKQgcVSFjHcUyxm4SbKPSQXsWBBWQh.jpeg",
    ],
  },
  alternates: {
    canonical: "https://secretof-elegance.vercel.app/services",
    languages: {
      "en-AE": "https://secretof-elegance.vercel.app/services",
      // add more locales when you add translations
    },
  },
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
}

export default function ServicesPage() {
  const siteUrl = "https://secretof-elegance.vercel.app"
  const pageUrl = `${siteUrl}/services`
  const brand = "Secrets of Elegance"
  const phone = "+971509087548"
  const mapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.285540526624!2d55.43219557526517!3d25.39141397758609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f592de45d4ded%3A0x1f749e11e5631f9b!2sAida%20Tower%20-%20Ajman!5e0!3m2!1sen!2sae!4v1728970022874!5m2!1sen!2sae"

  const social = [
    "https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw==",
    "https://www.facebook.com/share/1CbXYvhG9B/",
    "https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1",
  ]

  const ogImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-14%20at%208.34.33%20PM-HKQgcVSFjHcUyxm4SbKPSQXsWBBWQh.jpeg"

  // Main Service schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Secrets of Elegance Services",
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#business`,
      name: brand,
      image: ogImage,
      telephone: phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Aida Tower, Ajman",
        addressLocality: "Ajman",
        addressRegion: "Ajman",
        postalCode: "00000",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.391414,
        longitude: 55.432196,
      },
      sameAs: social,
      hasMap: mapEmbed,
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
        telephone: phone,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["en", "ar"],
      },
    },
    serviceType: [
      "Manicure",
      "Pedicure",
      "Waxing",
      "Facial Cleaning",
      "Threading",
      "Hair Care",
      "Nail Art",
      "Beauty Treatments",
    ],
    areaServed: { "@type": "City", name: "Ajman" },
    image: ogImage,
  }

  // Additional SEO schemas
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    name: brand,
    url: siteUrl,
    image: ogImage,
    sameAs: social,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aida Tower, Ajman",
      addressLocality: "Ajman",
      addressRegion: "Ajman",
      addressCountry: "AE",
    },
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: pageUrl,
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: brand,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query",
    },
  }

  // New: WebPage schema for the Services page itself
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services | Secrets of Elegance",
    url: pageUrl,
    primaryImageOfPage: ogImage,
    description:
      "Explore Secrets of Elegance's beauty services in Ajman including manicure, pedicure, waxing, facials, threading, hair care, and more.",
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    isPartOf: { "@id": `${siteUrl}#website` },
  }

  // New: FAQ schema (helps with rich results)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We offer manicure, pedicure, waxing, facial cleaning, threading, hair care, nail art, and other beauty treatments.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can WhatsApp us at +971509087548 to book instantly, or use the contact page to send a message.",
        },
      },
      {
        "@type": "Question",
        name: "What are your opening hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We’re open daily from 10:00 AM to 10:00 PM (Ajman, UAE).",
        },
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We’re located at Aida Tower, Ajman. You can find us on Google Maps via the map embedded on our site.",
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Services | Secrets of Elegance Ajman</title>
        <meta
          name="description"
          content="Explore Secrets of Elegance's beauty services in Ajman including manicure, pedicure, waxing, facials, threading, hair care, and more. Call or WhatsApp +971509087548 to book."
        />
        <meta
          name="keywords"
          content="Ajman beauty services, manicure Ajman, pedicure Ajman, waxing Ajman, facials Ajman, threading Ajman, hair care Ajman, nail art Ajman, beauty treatments Ajman"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content="Services | Secrets of Elegance Ajman" />
        <meta
          property="og:description"
          content="Discover Secrets of Elegance's beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. Contact +971509087548."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Secrets of Elegance" />
        <meta property="og:locale" content="en_AE" />
        {/* see_also to associate social profiles */}
        <meta property="og:see_also" content={social[0]} />
        <meta property="og:see_also" content={social[1]} />
        <meta property="og:see_also" content={social[2]} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Secrets of Elegance Ajman" />
        <meta
          name="twitter:description"
          content="Explore our beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. WhatsApp +971509087548."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Secrets of Elegance — Beauty Salon in Ajman" />

        {/* Local relevance & contact */}
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman" />
        <meta name="ICBM" content="25.391414, 55.432196" />
        <meta name="format-detection" content="telephone=no" />

        {/* Hreflang (extend when you add languages) */}
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        {/* Social identity links */}
        <link rel="me" href={social[0]} />
        <link rel="me" href={social[1]} />
        <link rel="me" href={social[2]} />
      </Head>

      {/* Structured Data */}
      <JsonLd data={schema} />
      <JsonLd data={{ ...orgSchema, "@id": `${siteUrl}#business` }} />
      <JsonLd data={{ ...breadcrumb, "@id": `${pageUrl}#breadcrumb` }} />
      <JsonLd data={{ ...websiteSchema, "@id": `${siteUrl}#website` }} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      <ServicesPageClient />
    </>
  )
}
