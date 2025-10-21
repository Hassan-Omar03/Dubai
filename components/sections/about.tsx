import { i18n } from "@/lib/i18n"

export default function AboutSection({ lang = "en" as keyof typeof i18n }) {
  const t = i18n[lang]
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <img
          src="/placeholder.svg?height=720&width=960"
          alt="About our salon"
          className="rounded-2xl w-full h-72 md:h-96 object-cover"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{t.aboutTitle}</h2>
          <p className="mt-4 text-muted-foreground text-pretty">{t.aboutBody}</p>
        </div>
      </div>
    </section>
  )
}
