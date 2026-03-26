import type { Metadata } from 'next'
import { buildMetadata } from '../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact A1cleaning for questions, service details, or scheduling support. We respond quickly during business hours.',
  path: '/contact',
  keywords: ['contact cleaning company', 'cleaning support', 'cleaning service contact'],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
