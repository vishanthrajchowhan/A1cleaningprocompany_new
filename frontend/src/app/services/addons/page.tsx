'use client'

import Button from '@/components/Button'
import Link from 'next/link'

export default function AddOnsPage() {
  const addons = [
    {
      name: 'Interior Windows',
      link: '/services/addons/interior-windows',
      icon: '🪟'
    },
    {
      name: 'Carpet Spot Treatment',
      link: '/services/addons/carpet-spot-treatment',
      icon: '🟠'
    },
    {
      name: 'Appliance Cleaning',
      link: '/services/addons/appliance-cleaning',
      icon: '🔌'
    },
    {
      name: 'High-Touch Disinfection',
      link: '/services/addons/high-touch-disinfection',
      icon: '🦠'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Add-On Services</h1>
          <p className="text-xl text-gray-600">
            Enhance your cleaning package with specialized services
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {addons.map((addon) => (
            <Link href={addon.link} key={addon.name}>
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
                <div className="text-5xl mb-4">{addon.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{addon.name}</h2>
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
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Customize Your Cleaning Package</h2>
      <Button href="/quote">Combine Services & Get Quote</Button>
    </div>
  )
}
