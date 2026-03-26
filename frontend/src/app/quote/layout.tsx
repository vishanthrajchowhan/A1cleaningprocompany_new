import type { Metadata } from 'next'
import { buildMetadata } from '../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Request a Quote',
  description:
    'Request a free cleaning quote for your office, commercial space, or home with fast follow-up from A1cleaning.',
  path: '/quote',
  keywords: ['cleaning quote', 'free cleaning estimate', 'office cleaning quote'],
})

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
