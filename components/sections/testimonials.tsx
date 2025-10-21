import { i18n } from "@/lib/i18n"

const DATA = [
  { name: "Aisha", text: "Amazing manicure and facial! The staff were kind and professional." },
  { name: "Sara", text: "Loved my hair color — subtle and elegant. Highly recommend." },
  { name: "Neha", text: "Clean, beautiful salon. Booking over WhatsApp was so easy!" },
]

export default function Testimonials({ lang = "en" as keyof typeof i18n }) {
  const t = i18n[lang]
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">{t.testimonialsTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.testimonialsSubtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {DATA.map((d, i) => (
          <blockquote key={i} className="rounded-xl border p-6 bg-card">
            <p className="text-pretty">“{d.text}”</p>
            <footer className="mt-4 text-sm text-muted-foreground">— {d.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
