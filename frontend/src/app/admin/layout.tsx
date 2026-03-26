import type { Metadata } from 'next'
import { buildMetadata } from '../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Admin',
  description: 'Administrative dashboard for A1cleaning.',
  path: '/admin',
  noIndex: true,
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
