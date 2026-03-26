import type { Metadata } from 'next'
import { buildMetadata } from '../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Services',
  description:
    'Explore office, commercial, deep cleaning, and move-in or move-out services with customizable plans.',
  path: '/services',
  keywords: ['cleaning services menu', 'office and commercial cleaning', 'deep cleaning services'],
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
