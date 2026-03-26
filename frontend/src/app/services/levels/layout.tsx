import type { Metadata } from 'next'
import { buildMetadata } from '../../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Service Levels',
  description:
    'Compare standard clean, deep clean, move-in or move-out, and post-construction cleaning service levels.',
  path: '/services/levels',
  keywords: ['cleaning service levels', 'standard clean', 'post construction cleaning'],
})

export default function LevelsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
