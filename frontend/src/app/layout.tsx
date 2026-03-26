import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSiteUrl, SITE_NAME } from './seo'

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
