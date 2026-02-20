'use client'

import Button from '@/components/Button'

export default function OneTimeServicePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">One-Time Service</h1>
          <p className="text-xl text-gray-600">
            Perfect for special occasions, move-ins, or one-off cleaning needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">When to Use</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">After Events</h3>
                  <p className="text-gray-600">Post-party or event cleanup</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Move-In Ready</h3>
                  <p className="text-gray-600">Prepare your new space before moving in</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Spring Cleaning</h3>
                  <p className="text-gray-600">Seasonal deep refresh</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Special Projects</h3>
                  <p className="text-gray-600">Post-renovation or construction cleanup</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>No long-term commitment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Professional results on demand</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Cost-effective for occasional needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Quick turnaround available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Schedule?</h2>
          <Button href="/quote">Book Your One-Time Service</Button>
        </div>
      </div>
    </div>
  )
}
