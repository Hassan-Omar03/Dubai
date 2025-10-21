"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { dictionary, type Lang } from "@/lib/i18n"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangCtx = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en"
    const stored = localStorage.getItem("lang")
    return stored === "ar" || stored === "en" ? (stored as Lang) : "en"
  })

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }
    localStorage.setItem("lang", lang)
  }, [lang])

  const t = useMemo(() => {
    return (key: string) => dictionary[lang]?.[key] ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <select
      aria-label="Language"
      className="rounded-md border bg-background px-2 py-1 text-sm"
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  )
}
