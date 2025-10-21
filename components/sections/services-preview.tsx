import { i18n } from "@/lib/i18n"
import { SERVICES } from "@/lib/services-data"
import { MessageCircle } from "lucide-react"

export default function ServicesPreview({ lang = "en" as keyof typeof i18n }) {
  const t = i18n[lang]
  const items = SERVICES.slice(0, 6)
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">{t.servicesHomeTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.servicesHomeSubtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div key={s.slug} className="rounded-xl border overflow-hidden bg-card hover:shadow-lg transition">
            <img src={s.image || "/placeholder.svg"} alt={s.name} className="h-48 w-full object-cover" />
            <div className="p-4 grid gap-3">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
              <div className="flex items-center justify-between">
                <a href={`/services#${s.slug}`} className="text-sm text-primary hover:underline">
                  Learn more
                </a>
                <a
                  href={`https://wa.me/971509087548?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(s.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-2 text-xs font-medium hover:opacity-90 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.cta.bookNow}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/services" className="rounded-full border px-5 py-3 text-sm font-medium hover:bg-muted transition">
          Explore all services
        </a>
      </div>
    </section>
  )
}
