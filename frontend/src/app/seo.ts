import type { Metadata } from 'next'

const FALLBACK_SITE_URL = 'https://www.a1cleaningprocompany.com'

export const SITE_NAME = 'A1cleaning'

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL

  try {
    return new URL(raw).toString().replace(/\/$/, '')
  } catch {
    return FALLBACK_SITE_URL
  }
}

type BuildMetadataOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const baseUrl = getSiteUrl()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const canonical = `${baseUrl}${normalizedPath}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `${baseUrl}/images/logo.png`,
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/logo.png`],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}