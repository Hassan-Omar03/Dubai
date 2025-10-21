export default function sitemap() {
  const base = "https://example.com"
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ]
}
