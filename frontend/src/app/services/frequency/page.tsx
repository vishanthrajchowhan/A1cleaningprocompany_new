'use client'

import Button from '@/components/Button'
import Link from 'next/link'

export default function CleaningFrequencyPage() {
  const frequencies = [
    {
      name: 'One-Time Service',
      link: '/services/frequency/one-time',
      icon: '🎯'
    },
    {
      name: 'Weekly',
      link: '/services/frequency/weekly',
      icon: '📅'
    },
    {
      name: 'Bi-Weekly',
      link: '/services/frequency/bi-weekly',
      icon: '📆'
    },
    {
      name: 'Monthly',
      link: '/services/frequency/monthly',
      icon: '📍'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Cleaning Frequency Options</h1>
          <p className="text-xl text-gray-600">
            Choose the perfect cleaning schedule that fits your needs and budget
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {frequencies.map((freq) => (
            <Link href={freq.link} key={freq.name}>
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
                <div className="text-5xl mb-4">{freq.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{freq.name}</h2>
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
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Help Choosing?</h2>
      <Button href="/quote">Get a Custom Quote</Button>
    </div>
  )
}
