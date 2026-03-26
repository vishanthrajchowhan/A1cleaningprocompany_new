import type { MetadataRoute } from 'next'
import { getSiteUrl } from './seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const now = new Date()

  const routes = [
    '/',
    '/about',
    '/contact',
    '/quote',
    '/services',
    '/services/office-cleaning',
    '/services/commercial-cleaning',
    '/services/deep-cleaning',
    '/services/move-in-cleaning',
    '/services/frequency',
    '/services/frequency/one-time',
    '/services/frequency/weekly',
    '/services/frequency/bi-weekly',
    '/services/frequency/monthly',
    '/services/levels',
    '/services/levels/standard-clean',
    '/services/levels/deep-clean',
    '/services/levels/move-in-out',
    '/services/levels/post-construction',
    '/services/addons',
    '/services/addons/interior-windows',
    '/services/addons/carpet-spot-treatment',
    '/services/addons/appliance-cleaning',
    '/services/addons/high-touch-disinfection',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/services') ? 0.8 : 0.7,
  }))
}
