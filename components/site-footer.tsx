"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "./language";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  X,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // ✅ TikTok icon
import { useState } from "react";
import logo from "../public/logo.png"; // ✅ Your logo image

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-16">
      {/* CTA stripe */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg md:text-xl font-semibold">
              {t("footer.ctaTitle")}
            </p>
            <p className="text-white/90 text-sm">{t("footer.ctaSubtitle")}</p>
          </div>
          <a
            href="https://wa.me/971509087548"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-pink-600 px-5 py-2 font-medium shadow-md hover:shadow-lg transition"
          >
            <MessageCircle className="h-4 w-4" /> {t("footer.ctaButton")}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
          {/* ✅ Logo + Brand */}
          <div className="flex flex-col items-start">
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] mb-3">
              <Image
                src={logo}
                alt="Logo"
                width={70}
                height={70}
                className="w-[50px] h-[70px] sm:w-[50px] sm:h-[70px] rounded-full object-cover"
              />
            </div>
            <h3 className="font-extrabold text-xl bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-3">
              {t("brand")}
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <p className="font-semibold mb-3">{t("footer.quicklinks")}</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-pink-600 transition">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-pink-600 transition"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-600 transition">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <p className="font-semibold mb-3">{t("footer.contact")}</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-pink-600" />
                <span>Ajman, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-pink-600" />
                <a
                  href="tel:+971509087548"
                  className="hover:text-pink-600 transition"
                >
                  +971 50 908 7548
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-pink-600" />
                <a
                  href="mailto:info@secretsofelegance.ae"
                  className="hover:text-pink-600 transition"
                >
                  info@secretsofelegance.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + Social Links */}
          <div className="text-sm">
            <p className="font-semibold mb-3">{t("footer.hours")}</p>
            <p className="text-gray-600">{t("footer.openHours")}</p>
            <p className="font-semibold mt-6 mb-3">{t("footer.follow")}</p>
            <ul className="space-y-2">
              {/* <li>
                <a
                  href="https://wa.me/971509087548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-pink-600" /> WhatsApp
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.instagram.com/aserar54?igsh=MWluMWRmbjBvaGdiaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition inline-flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4 text-pink-600" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1CbXYvhG9B/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition inline-flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4 text-pink-600" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@aserar54?_t=ZS-90XvFOM4TP6&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition inline-flex items-center gap-2"
                >
                  <SiTiktok className="h-4 w-4 text-pink-600" /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 py-4 border-t">
          © {new Date().getFullYear()} {t("brand")} – {t("footer.rights")}
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <FloatingContactFab />
    </footer>
  );
}

function FloatingContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[9999]">
      <div
        className={`flex flex-col items-end gap-3 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <a
          href="tel:+971509087548"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/971509087548"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
          </svg>
        </a>

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-gray-700 border shadow hover:bg-gray-50"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
