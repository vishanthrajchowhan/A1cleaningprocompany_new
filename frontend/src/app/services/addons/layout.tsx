import type { Metadata } from 'next'
import { buildMetadata } from '../../seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Add-Ons',
  description:
    'Add specialized cleaning options like interior windows, appliance cleaning, carpet spot treatment, and disinfection.',
  path: '/services/addons',
  keywords: ['cleaning add ons', 'interior window cleaning', 'appliance cleaning'],
})

export default function AddonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
