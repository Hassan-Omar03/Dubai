"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import { useI18n } from "../../components/language"
import { JsonLd } from "../../components/json-ld"
import Head from "next/head"

export default function ContactClientPage() {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    setLoading(true)
    try {
      // ✅ Send form data to WhatsApp instead of API
      const message = `New Contact Message:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Message: ${data.message || "N/A"}`
      const encoded = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/971509087548?text=${encoded}`
      window.open(whatsappUrl, "_blank")

      setSent(true)
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  // ===== SEO constants =====
  const siteUrl = "https://asrarsalon.com"
  const pageUrl = `${siteUrl}/contact`
  const brand = "Secrets of Elegance"
  const phoneRaw = "+971509087548"
  const phoneDisplay = "+971 50 908 7548"
  const socials = [
    "https://wa.me/971509087548",
    "https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw==",
    "https://www.facebook.com/share/1CbXYvhG9B/",
    "https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1",
  ]
  // Prefer an asset on your own domain for better trust/snippet stability
  const ogImage = "https://asrarsalon.com/og-image.png"
  const mapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.285540526624!2d55.43219557526517!3d25.39141397758609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f592de45d4ded%3A0x1f749e11e5631f9b!2sAida%20Tower%20-%20Ajman!5e0!3m2!1sen!2sae!4v1728970022874!5m2!1sen!2sae"

  // ===== Structured Data =====
  // Primary business entity (kept, enriched)
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    name: brand,
    url: siteUrl,
    image: ogImage,
    telephone: phoneRaw,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    sameAs: socials,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneRaw,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["en", "ar"],
      },
    ],
  }

  // Organization (kept for clarity if Google chooses Org vs LocalBusiness)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: brand,
    url: siteUrl,
    logo: ogImage,
    sameAs: socials,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneRaw,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["en", "ar"],
      },
    ],
  }

  // Breadcrumb
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
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

  // Contact page (WebPage)
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "ContactPage"],
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Contact Secrets of Elegance | Ajman Beauty Salon",
    description:
      "Contact Secrets of Elegance in Ajman for manicure, pedicure, waxing, facials, threading, and hair care. Book via WhatsApp or contact form.",
    primaryImageOfPage: ogImage,
    isPartOf: { "@id": `${siteUrl}#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  }

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* Core */}
        <title>Contact Secrets of Elegance | Ajman Beauty Salon</title>
        <meta
          name="description"
          content="Contact Secrets of Elegance in Ajman for manicure, pedicure, waxing, facials, threading, and hair care. Call or WhatsApp +971509087548 to book your appointment today."
        />
        {/* Expanded long-tail & local keywords */}
        <meta
          name="keywords"
          content="Contact salon Ajman, Contact Secrets of Elegance, Ajman beauty salon contact, WhatsApp salon Ajman, Book manicure Ajman, Book pedicure Ajman, Waxing Ajman booking, Facial Ajman booking, Threading Ajman contact, Hair salon Ajman, Ladies salon Ajman, Best salon Ajman, Salon near me Ajman"
        />
        <meta name="author" content="Secrets of Elegance Ajman" />
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
        <meta property="og:title" content="Contact Secrets of Elegance | Ajman Beauty Salon" />
        <meta
          property="og:description"
          content="Reach Secrets of Elegance in Ajman for luxury beauty services including manicure, pedicure, waxing, facials, threading, and hair care. WhatsApp +971509087548."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Secrets of Elegance" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:see_also" content={socials[1]} />
        <meta property="og:see_also" content={socials[2]} />
        <meta property="og:see_also" content={socials[3]} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Secrets of Elegance | Ajman Beauty Salon" />
        <meta
          name="twitter:description"
          content="Get in touch with Secrets of Elegance in Ajman for luxury beauty treatments. WhatsApp +971509087548."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Secrets of Elegance — Ajman Beauty Salon" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        {/* Identity links */}
        <link rel="me" href={socials[0]} />
        <link rel="me" href={socials[1]} />
        <link rel="me" href={socials[2]} />
        <link rel="me" href={socials[3]} />

        {/* Small perf wins for WhatsApp click */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="" />
      </Head>

      <section className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{t("contact.title")}</h1>
          <p className="text-muted-foreground mb-6">{t("contact.subtitle")}</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input name="name" placeholder={t("form.name")} required />
            <Input name="email" type="email" placeholder={t("form.email")} required />
            <Input name="phone" placeholder={t("form.phone")} />
            <Textarea name="message" placeholder={t("form.message")} rows={5} />
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? t("form.sending") : t("form.submit")}
            </Button>
            {sent && <p className="text-green-600">{t("form.successMessage")}</p>}
          </form>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-medium">{t("map.title")}</h2>
          <div className="aspect-video rounded-xl overflow-hidden border">
            <iframe
              className="w-full h-full"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ajman Map"
              allowFullScreen
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>WhatsApp: {phoneDisplay}</p>
            <p>Ajman, United Arab Emirates</p>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <JsonLd data={schema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={contactPageSchema} />
    </>
  )
}
