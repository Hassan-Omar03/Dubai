"use client"

import { useState, useEffect } from "react"
import { i18n } from "@/lib/i18n"

export default function Hero({ lang = "en" as keyof typeof i18n }) {
  const t = i18n[lang]

  // subtle fade-in
  const [show, setShow] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <section className={`relative overflow-hidden`}>
      <div className="container mx-auto px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div className={`transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
            Welcome
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-balance">{t.heroTitle}</h1>
          <p className="mt-4 text-muted-foreground text-pretty">{t.heroSubtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services"
              className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {t.ctaExplore}
            </a>
            <a href="/contact" className="rounded-full border px-5 py-3 text-sm font-medium hover:bg-muted transition">
              {t.ctaContact}
            </a>
          </div>
        </div>
        <div className={`transition-transform duration-700 ${show ? "translate-y-0" : "translate-y-4"}`}>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Salon interior"
              className="rounded-xl h-40 w-full object-cover md:h-56"
            />
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Makeup service"
              className="rounded-xl h-40 w-full object-cover md:h-56"
            />
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Manicure"
              className="rounded-xl h-40 w-full object-cover md:h-56"
            />
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Spa relaxation"
              className="rounded-xl h-40 w-full object-cover md:h-56"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
