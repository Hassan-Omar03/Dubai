"use client"

import Link from "next/link"
import { LanguageSwitcher, useI18n } from "./language"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { SiTiktok } from "react-icons/si"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "../public/logo.png"

export function SiteHeader() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setShow(true)
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${
        show ? "opacity-100" : "opacity-0"
      } sticky top-0 z-50 transition-all duration-500`}
    >
      <div
        className={`transition-colors ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between px-3 xs:px-4 md:px-8 py-2.5 md:py-3">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-2 xs:gap-3 min-w-0">
            <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-[70px] md:h-[70px] shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={70}
                height={70}
                className="w-10 h-10 xs:w-12 xs:h-12 md:w-[50px] md:h-[70px] rounded-full object-cover bg-white"
                priority
              />
            </div>
            <Link
              href="/"
              className="text-base xs:text-lg md:text-2xl font-extrabold tracking-tight min-w-0"
            >
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-sky-500 bg-clip-text text-transparent block truncate">
                {t("brand")}
              </span>
            </Link>
          </div>

          {/* Middle: Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[16px] lg:text-[18px] font-medium text-gray-700">
            {[
              { href: "/", label: t("nav.home") },
              { href: "/services", label: t("nav.services") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="relative group hover:text-pink-600 transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Socials + Lang + Burger */}
          <div className="flex items-center gap-1 xs:gap-2">
            {/* Socials: compact on xs, full on sm+ */}
            <div className="flex items-center gap-1 xs:gap-2">
              {/* Show only Instagram on very small screens to save space */}
              <a
                href="https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              {/* Reveal Facebook + TikTok from sm and up */}
              <a
                href="https://www.facebook.com/share/1CbXYvhG9B/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="TikTok"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>

            {/* Language switcher hidden on xs (kept) */}
            <div className="hidden xs:flex">
              <LanguageSwitcher />
            </div>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition shrink-0"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t bg-white/95 backdrop-blur-lg shadow-inner"
          >
            <nav className="flex flex-col items-start px-5 py-5 space-y-3 text-[16px] text-gray-700">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/services", label: t("nav.services") },
                { href: "/contact", label: t("nav.contact") },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-1 hover:text-pink-600 transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* Socials inside mobile menu (for users who expect them here) */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1CbXYvhG9B/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white"
                  aria-label="TikTok"
                >
                  <SiTiktok className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
