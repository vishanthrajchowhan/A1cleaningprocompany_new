import type { Metadata } from 'next'
import { buildMetadata } from '../../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Frequency',
  description:
    'Choose one-time, weekly, bi-weekly, or monthly cleaning schedules tailored to your space and budget.',
  path: '/services/frequency',
  keywords: ['cleaning frequency', 'weekly cleaning', 'monthly cleaning service'],
})

export default function FrequencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
