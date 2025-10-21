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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } finally {
      setLoading(false)
    }
  }

  // ===== SEO constants (added) =====
  const siteUrl = "https://secretof-elegance.vercel.app"
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
  const ogImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-14%20at%208.34.33%20PM-HKQgcVSFjHcUyxm4SbKPSQXsWBBWQh.jpeg"
  const mapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.285540526624!2d55.43219557526517!3d25.39141397758609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f592de45d4ded%3A0x1f749e11e5631f9b!2sAida%20Tower%20-%20Ajman!5e0!3m2!1sen!2sae!4v1728970022874!5m2!1sen!2sae"

  // ✅ Structured Data (kept) — your original block
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Secrets of Elegance",
    url: "https://secretof-elegance.vercel.app/contact",
    telephone: "+971509087548",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aida Tower, Ajman",
      addressLocality: "Ajman",
      addressRegion: "Ajman",
      postalCode: "",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.39141397758609,
      longitude: 55.43219557526517,
    },
    openingHours: "Mo-Su 10:00-22:00",
    contactType: "customer service",
  }

  // ✅ Additional JSON-LD (added; non-breaking)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    name: brand,
    url: siteUrl,
    image: ogImage,
    telephone: phoneRaw,
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
    sameAs: socials,
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
      telephone: phoneRaw,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
    },
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
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

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Contact Secrets of Elegance | Ajman Beauty Salon</title>
        <meta
          name="description"
          content="Contact Secrets of Elegance in Ajman for manicure, pedicure, waxing, facials, threading, and hair care. Call or WhatsApp +971509087548 to book your appointment today."
        />
        <meta
          name="keywords"
          content="Ajman beauty salon, contact Secrets of Elegance, manicure Ajman, pedicure Ajman, waxing Ajman, facials Ajman, threading Ajman, hair care Ajman, ladies salon Ajman, spa Ajman"
        />
        <meta name="author" content="Secrets of Elegance Ajman" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />

        {/* Local/geo */}
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman" />
        <meta name="ICBM" content="25.391414, 55.432196" />
        <meta name="format-detection" content="telephone=no" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Contact Secrets of Elegance | Ajman Beauty Salon" />
        <meta
          property="og:description"
          content="Reach Secrets of Elegance in Ajman for luxury beauty services including manicure, pedicure, waxing, facials, threading, and hair care. WhatsApp +971509087548."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Secrets of Elegance" />
        <meta property="og:locale" content="en_AE" />
        {/* Associate social profiles */}
        <meta property="og:see_also" content={socials[1]} />
        <meta property="og:see_also" content={socials[2]} />
        <meta property="og:see_also" content={socials[3]} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Secrets of Elegance | Ajman Beauty Salon" />
        <meta
          name="twitter:description"
          content="Get in touch with Secrets of Elegance in Ajman for luxury beauty treatments. WhatsApp +971509087548."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        {/* Identity links */}
        <link rel="me" href={socials[0]} />
        <link rel="me" href={socials[1]} />
        <link rel="me" href={socials[2]} />
        <link rel="me" href={socials[3]} />
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

        {/* Map Section */}
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

      {/* JSON-LD: original + added */}
      <JsonLd data={schema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={websiteSchema} />
    </>
  )
}
