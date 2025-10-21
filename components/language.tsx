// Simple 3-language i18n with RTL handling for Arabic
"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { dictionary } from "../lib/i18n"

type Lang = "en" | "ar"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nCtx = createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en"
    const stored = localStorage.getItem("lang")
    return stored === "ar" || stored === "en" ? (stored as Lang) : "en"
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem("lang", lang)
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  const t = useMemo(() => {
    const d = dictionary[lang] || dictionary.en
    return (key: string) => {
      // nested keys like services.manicure.name
      return key.split(".").reduce<any>((acc, k) => (acc ? acc[k] : undefined), d) ?? key
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  return (
    <div className="inline-flex rounded-md border overflow-hidden">
      {(["en", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 text-sm ${lang === l ? "bg-primary text-primary-foreground" : "bg-background"}`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
