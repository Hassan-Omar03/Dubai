import { i18n } from "@/lib/i18n"

const POSTS = [
  { title: "5 everyday skincare tips for a natural glow", image: "/placeholder.svg?height=640&width=960", href: "#" },
  { title: "How to make your manicure last longer", image: "/placeholder.svg?height=640&width=960", href: "#" },
  { title: "Heatless hair styling ideas for soft waves", image: "/placeholder.svg?height=640&width=960", href: "#" },
]

export default function BeautyHacks({ lang = "en" as keyof typeof i18n }) {
  const t = i18n[lang]
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">{t.beautyHacksTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.beautyHacksSubtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="rounded-xl border overflow-hidden bg-card hover:shadow-lg transition"
          >
            <img src={p.image || "/placeholder.svg"} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
