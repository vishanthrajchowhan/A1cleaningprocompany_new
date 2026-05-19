import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSiteUrl, GOOGLE_BUSINESS_PROFILE_URL, SITE_NAME } from './seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Professional Cleaning Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Professional cleaning services for offices, commercial spaces, and homes in South Florida.',
  applicationName: SITE_NAME,
  category: 'Cleaning Services',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteUrl = getSiteUrl()
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'A1 Cleaning Pro LLC',
    url: siteUrl,
    telephone: '+1-786-390-9145',
    email: 'ingrid@a1cleaningprocompany.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '319 South State Road 7',
      addressLocality: 'Plantation',
      addressRegion: 'FL',
      postalCode: '33317',
      addressCountry: 'US',
    },
    sameAs: [GOOGLE_BUSINESS_PROFILE_URL],
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BT4K8VVBR1"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BT4K8VVBR1');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
