"use client"

import { useI18n } from "../../components/language"
import { services } from "../../lib/services-data"
import { JsonLd } from "../../components/json-ld"
import { MessageCircle } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export default function ServicesPageClient() {
  const { t } = useI18n()

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Beauty Services",
    provider: { "@type": "BeautySalon", name: "Secrets of Elegance" },
    areaServed: { "@type": "City", name: "Dubai" },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-rose-50 via-pink-50 to-sky-50">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-200/30 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/30 blur-3xl rounded-full animate-pulse-slow delay-1000" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight"
          >
            {t("services.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-3 leading-relaxed"
          >
            {t("services.subtitle")}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t("services.intro1")}
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl overflow-hidden border bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 group relative"
            >
              {/* Floating shine animation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-shimmer" />

              <div className="relative overflow-hidden">
                <motion.img
                  src={s.imageUrl || "/placeholder.svg"}
                  alt={t(`services.${s.id}.name`)}
                  className="w-full h-56 object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-6 relative z-10">
                <motion.h3
                  variants={fadeUp}
                  className="font-semibold text-lg text-gray-800 mb-2"
                >
                  {t(`services.${s.id}.name`)}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-gray-600 text-sm mb-5 line-clamp-3"
                >
                  {t(`services.${s.id}.desc`)}
                </motion.p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/971509087548?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(
                    t(`services.${s.id}.name`)
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.bookNow")}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        className="relative text-center py-24 bg-gradient-to-r from-pink-100 via-rose-50 to-sky-100 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 -z-10 bg-[url('/spa-relaxation-aromatherapy.jpg')] bg-cover bg-center opacity-10 animate-fadeSlow" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Ready for Your Transformation?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Pamper yourself with luxury beauty treatments and expert care.
            Contact us today to schedule your appointment.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/971509087548?text=Hi%2C%20I'd%20like%20to%20book%20a%20beauty%20service."
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Book via WhatsApp
          </motion.a>
        </div>
      </motion.section>

      <JsonLd data={serviceSchema} />
    </>
  )
}
