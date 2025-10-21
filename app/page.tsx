"use client"

import { useI18n } from "../components/language"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Head from "next/head"
import { JsonLd } from "../components/json-ld"
import { services } from "../lib/services-data"
import { MessageCircle } from "lucide-react"
import { motion, easeOut, easeInOut } from "framer-motion"

export default function HomePage() {
  const { t } = useI18n()

  // ----- CONSTANTS (SEO) -----
  const siteUrl = "https://secretof-elegance.vercel.app"
  const pageUrl = siteUrl
  const brand = "Secrets of Elegance"
  const phone = "+971509087548"
  const socials = [
    "https://wa.me/971509087548",
    "https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw==",
    "https://www.facebook.com/share/1CbXYvhG9B/",
    "https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1",
  ]
  const ogImage = `${siteUrl}/elegant-dubai-beauty-salon.jpg`

  // ----- YOUR EXISTING PAGE SCHEMA (kept) -----
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Secrets of Elegance",
    url: "https://example.com",
    image: "/elegant-dubai-beauty-salon.jpg",
    telephone: "+971509087548",
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    sameAs: ["https://wa.me/971509087548", "https://instagram.com/", "https://facebook.com/"],
  }

  // ----- ADDITIONAL JSON-LD (non-breaking, SEO-only) -----
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    name: brand,
    url: siteUrl,
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
    sameAs: socials,
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

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: pageUrl }],
  }

  const preview = services.slice(0, 6)

  /* Animation Variants */
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, when: "beforeChildren" } },
  }

  const slideFromLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  }

  const slideFromRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  const imageFloat = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeInOut } },
  }

  return (
    <>
      {/* ====== SEO HEAD (added, non-breaking) ====== */}
      <Head>
        <title>Secrets of Elegance | Beauty Salon in Ajman</title>
        <meta
          name="description"
          content="Secrets of Elegance — premium beauty salon in Ajman offering manicure, pedicure, waxing, facials, threading, hair care, nail art, and more. Call or WhatsApp +971509087548."
        />
        <meta
          name="keywords"
          content="beauty salon Ajman, manicure Ajman, pedicure Ajman, waxing Ajman, facial Ajman, threading Ajman, hair care Ajman, nail art Ajman"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman" />
        <meta name="ICBM" content="25.391414, 55.432196" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph */}
        <meta property="og:title" content="Secrets of Elegance | Beauty Salon in Ajman" />
        <meta
          property="og:description"
          content="Premium beauty services in Ajman — manicure, pedicure, waxing, facials, threading, hair care, and more."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Secrets of Elegance" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:see_also" content={socials[1]} />
        <meta property="og:see_also" content={socials[2]} />
        <meta property="og:see_also" content={socials[3]} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secrets of Elegance | Beauty Salon in Ajman" />
        <meta
          name="twitter:description"
          content="Premium beauty services in Ajman — manicure, pedicure, waxing, facials, threading, hair care, and more."
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

      {/* ========================
          HERO SECTION
         ======================== */}
      <motion.section
        className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {/* Gradient Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-pink-50 to-sky-50" />

        <motion.div
          className="absolute -top-24 sm:-top-40 -left-24 sm:-left-40 w-56 h-56 sm:w-96 sm:h-96 bg-pink-300/30 blur-3xl rounded-full"
          animate={{ y: [0, 8, 0], opacity: [0.9, 0.6, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="absolute top-24 sm:top-40 -right-24 sm:-right-40 w-56 h-56 sm:w-96 sm:h-96 bg-sky-300/20 blur-3xl rounded-full"
          animate={{ y: [0, -6, 0], opacity: [0.9, 0.6, 0.9] }}
          transition={{ duration: 9, repeat: Infinity, ease: easeInOut }}
        />

        <div className="grid gap-8 sm:gap-14 md:grid-cols-2 items-center">
          <motion.div variants={slideFromLeft} className="space-y-5 sm:space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/60 text-pink-600 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-sm ring-1 ring-pink-300/30 backdrop-blur-md">
              {t("hero.badge")}
            </span>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-800"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-prose leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="shadow-lg bg-gradient-to-r from-pink-500 to-rose-400 text-white hover:from-pink-600 hover:to-rose-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  {t("cta.viewServices")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-400 text-pink-600 hover:bg-pink-50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  {t("cta.bookNow")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-3 sm:gap-5">
            {["/elegant-dubai-beauty-salon-interior.jpg", "/luxury-salon-makeup-service.jpg"].map(
              (src, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] shadow-2xl border border-white/30"
                  variants={imageFloat}
                >
                  <motion.img
                    src={src}
                    alt={t("alt.hero")}
                    className="w-full aspect-[4/3] sm:h-64 md:h-72 object-cover"
                    initial={{ scale: 1.03, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.1 * i }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* ========================
          ABOUT SECTION
         ======================== */}
      <motion.section
        className="relative bg-gradient-to-b from-white to-rose-50 py-16 sm:py-24 md:py-28 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="absolute -top-20 sm:-top-32 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-sky-200/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 sm:bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200/40 blur-3xl rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 grid gap-8 sm:gap-16 md:grid-cols-2 items-center">
          <motion.div
            variants={slideFromRight}
            className="relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] shadow-2xl border border-white/30"
          >
            <img
              src="/beauty-salon-about-team-in-ajman.jpg"
              alt="About our salon"
              className="w-full aspect-[16/10] sm:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div variants={slideFromLeft} className="space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {t("about.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{t("about.copy")}</p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-6">
              {[
                { num: "10+", label: t("about.stats.years"), grad: "from-sky-500 to-cyan-400" },
                { num: "250+", label: t("about.stats.clients"), grad: "from-pink-500 to-rose-400" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border bg-white/80 backdrop-blur-sm p-6 sm:p-8 text-center shadow-md"
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <p
                    className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.grad} bg-clip-text text-transparent`}
                  >
                    {stat.num}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================
          SERVICES PREVIEW
         ======================== */}
      <motion.section
        className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
            {t("welcome.title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-600">
            {t("welcome.subtitle")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 sm:mt-3 text-gray-500">
            {t("welcome.copy")}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((s, idx) => {
            const variant = idx % 2 === 0 ? slideFromLeft : slideFromRight
            return (
              <motion.div
                key={s.id}
                className="group rounded-2xl border bg-white/70 backdrop-blur-sm overflow-hidden shadow-md"
                variants={variant}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={s.imageUrl || "/placeholder.svg"}
                    alt={t(`services.${s.id}.name`)}
                    className="w-full aspect-[16/10] sm:h-56 object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 group-hover:text-pink-600 transition-colors">
                    {t(`services.${s.id}.name`)}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{t(`services.${s.id}.desc`)}</p>

                  <a
                    href={`https://wa.me/971509087548?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(
                      t(`services.${s.id}.name`)
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <motion.div variants={fadeUp}>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-400 text-pink-600 hover:bg-pink-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t("cta.exploreAll")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================
          TESTIMONIALS
         ======================== */}
      <motion.section
        className="bg-gradient-to-b from-pink-50 to-sky-50 py-16 sm:py-24 md:py-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
            {t("testimonials.title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base">
            {t("testimonials.subtitle")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12">
            {t("testimonials.copy")}
          </motion.p>

          <div className="grid gap-6 sm:gap-10 md:grid-cols-3">
            {[
              { name: "Aisha M.", text: "Amazing manicure and facial! The staff were kind and professional. Highly recommend this salon." },
              { name: "Sara K.", text: "Loved my hair color — subtle and elegant. The salon is clean and beautiful. Will return!" },
              { name: "Neha P.", text: "Booking over WhatsApp was so easy! Great service, friendly team, and lovely ambience." },
            ].map((item, i) => (
              <motion.blockquote
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -6 }}
                className="rounded-2xl border bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm"
              >
                <p className="italic text-gray-600 mb-3 sm:mb-4">&ldquo;{item.text}&rdquo;</p>
                <footer className="text-sm font-medium text-pink-600">— {item.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ========================
          BEAUTY HACKS
         ======================== */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-gray-800">
            {t("beautyHacks.title")}
          </motion.h2>
        <motion.p variants={fadeUp} className="text-sm sm:text-base text-gray-600">
            {t("beautyHacks.subtitle")}
          </motion.p>
        </div>

        <div className="grid gap-5 sm:gap-8 md:grid-cols-4">
          {[
            { title: "5 everyday skincare tips for a natural glow", image: "/facial-skincare-glow.jpg" },
            { title: "How to make your manicure last longer", image: "/manicure-hands-polish.jpg" },
            { title: "Heatless hair styling ideas for soft waves", image: "/hair-styling-soft-waves.jpg" },
            { title: "Spa rituals to de-stress after work", image: "/spa-relaxation-aromatherapy.jpg" },
          ].map((post, i) => (
            <motion.a
              key={i}
              href="#"
              className="group rounded-2xl border bg-white/70 backdrop-blur-sm overflow-hidden"
              variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/10] sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-medium text-gray-700 group-hover:text-pink-600 transition-colors text-sm sm:text-base">
                  {post.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ========================
          VIDEO PROMO SECTION
         ======================== */}
      <motion.section
        className="relative bg-gradient-to-b from-rose-50 to-sky-50 py-16 sm:py-24 md:py-28 text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 -z-10 bg-[url('/beauty-salon-interior-bg.jpg')] bg-cover bg-center opacity-10" />
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
          {t("video.title")}
        </motion.h2>
        <motion.div variants={fadeUp} className="container mx-auto px-4 sm:px-6 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/30">
            <iframe
              src="https://www.youtube.com/embed/1Q1gkft4udw"
              title="Salon Video"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </motion.section>

      {/* ====== JSON-LD (original + added) ====== */}
      <JsonLd data={schema} />
      <JsonLd data={localBusiness} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumb} />
    </>
  )
}
