import ServicesPageClient from "./services-client"
import Head from "next/head"
import { JsonLd } from "../../components/json-ld"
import { MotionConfig, domAnimation, LazyMotion } from "framer-motion"

export const metadata = {
  title: "Services | Secrets of Elegance",
  description:
    "Discover our premium beauty services in Ajman — manicure, pedicure, waxing, facials, threading, hair care, and more at Secrets of Elegance.",
  openGraph: {
    title: "Services | Secrets of Elegance Ajman",
    description:
      "Discover Secrets of Elegance's beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. Contact +971509087548.",
    url: "https://asrarsalon.com/services",
    siteName: "Secrets of Elegance",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://asrarsalon.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Secrets of Elegance — Beauty Salon Services in Ajman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Secrets of Elegance Ajman",
    description:
      "Explore our beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. WhatsApp +971509087548.",
    images: ["https://asrarsalon.com/og-image.png"],
  },
  alternates: {
    canonical: "https://asrarsalon.com/services",
    languages: {
      "en-AE": "https://asrarsalon.com/services",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": 80,
    "max-video-preview": 20,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 80,
      "max-video-preview": 20,
    },
  },
}

export default function ServicesPage() {
  const siteUrl = "https://asrarsalon.com"
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

  const ogImage = "https://asrarsalon.com/og-image.png"

  // Main Service schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Secrets of Elegance Services",
    url: pageUrl,
    image: ogImage,
    areaServed: { "@type": "City", name: "Ajman" },
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
      geo: { "@type": "GeoCoordinates", latitude: 25.391414, longitude: 55.432196 },
      sameAs: social,
      hasMap: mapEmbed,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStoreOnly",
      priceCurrency: "AED",
      url: pageUrl,
    },
  }

  // Organization / Local business
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

  // Breadcrumbs
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
    ],
  }

  // Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: brand,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query",
    },
  }

  // WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Services | Secrets of Elegance",
    url: pageUrl,
    primaryImageOfPage: ogImage,
    description:
      "Explore Secrets of Elegance's beauty services in Ajman including manicure, pedicure, waxing, facials, threading, hair care, and more.",
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    isPartOf: { "@id": `${siteUrl}#website` },
  }

  // FAQ
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
        {/* Core */}
        <title>Services | Secrets of Elegance Ajman</title>
        <meta
          name="description"
          content="Explore Secrets of Elegance's beauty services in Ajman including manicure, pedicure, waxing, facials, threading, hair care, and more. Call or WhatsApp +971509087548 to book."
        />
        {/* Expanded, locality + long-tail keywords */}
        <meta
          name="keywords"
          content="Beauty services Ajman, Ladies salon services Ajman, Manicure Ajman, Pedicure Ajman, Gel nails Ajman, Acrylic nails Ajman, Nail art Ajman, Waxing Ajman, Full body waxing Ajman, Facial cleaning Ajman, Deep cleansing facial Ajman, Threading Ajman, Eyebrow threading Ajman, Hair care Ajman, Hair color Ajman, Keratin treatment Ajman, Bridal makeup Ajman, Mehndi Ajman, Henna Ajman, Spa Ajman, Massage Ajman, Best salon Ajman, Salon near me Ajman"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="en-AE" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Secrets of Elegance" />
        <link rel="canonical" href={pageUrl} />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />

        {/* Local signals */}
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman" />
        <meta name="ICBM" content="25.391414, 55.432196" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph */}
        <meta property="og:title" content="Services | Secrets of Elegance Ajman" />
        <meta
          property="og:description"
          content="Discover Secrets of Elegance's beauty services in Ajman — manicure, pedicure, waxing, facials, threading, and hair care. Contact +971509087548."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Secrets of Elegance" />
        <meta property="og:locale" content="en_AE" />
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

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        {/* Social identity links */}
        <link rel="me" href={social[0]} />
        <link rel="me" href={social[1]} />
        <link rel="me" href={social[2]} />

        {/* Small perf wins for external clicks (optional) */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="" />
      </Head>

      {/* Structured Data */}
      <JsonLd data={schema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* Faster, lighter animations site-wide for this page */}
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={{ duration: 0.25, ease: "easeOut" }} reducedMotion="user">
          <ServicesPageClient />
        </MotionConfig>
      </LazyMotion>
    </>
  )
}
