// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ankurbiswas.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add your other pages here
  ]
}