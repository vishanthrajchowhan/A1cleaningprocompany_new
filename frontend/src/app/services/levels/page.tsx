'use client'

import Button from '@/components/Button'
import Link from 'next/link'

export default function ServiceLevelsPage() {
  const levels = [
    {
      name: 'Standard Clean',
      link: '/services/levels/standard-clean',
      icon: '✨'
    },
    {
      name: 'Deep Clean',
      link: '/services/levels/deep-clean',
      icon: '🧽'
    },
    {
      name: 'Move-In / Move-Out',
      link: '/services/levels/move-in-out',
      icon: '📦'
    },
    {
      name: 'Post-Construction',
      link: '/services/levels/post-construction',
      icon: '🔨'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Service Levels</h1>
          <p className="text-xl text-gray-600">
            Choose the depth of cleaning that matches your specific needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {levels.map((level) => (
            <Link href={level.link} key={level.name}>
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
                <div className="text-5xl mb-4">{level.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{level.name}</h2>
                <p className="text-primary-600 font-semibold">Click to learn more →</p>
              </div>
            </Link>
          ))}
        </div>

        <CTA />
      </div>
    </div>
  )
}

function CTA() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Not Sure Which Level You Need?</h2>
      <Button href="/quote">Contact Us for Consultation</Button>
    </div>
  )
}
