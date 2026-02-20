'use client'

import Button from '@/components/Button'

export default function WeeklyCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Weekly Cleaning Service</h1>
          <p className="text-xl text-gray-600">
            Consistent, reliable cleaning every week to maintain a spotless environment
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Cleaning</h3>
                  <p className="text-gray-600">All rooms and common areas thoroughly cleaned</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Floor Care</h3>
                  <p className="text-gray-600">Vacuuming, sweeping, and mopping</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Restroom Sanitization</h3>
                  <p className="text-gray-600">Disinfect and refresh bathrooms</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Dusting & Surfaces</h3>
                  <p className="text-gray-600">Dust furniture, desks, and surfaces</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Weekly?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Always fresh and clean environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Best value for money</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Prevents dirt buildup</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Healthier work/living environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Consistent schedule and team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Flexible Scheduling</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">4</div>
              <p className="text-gray-600">Cleanings per month</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">📍</div>
              <p className="text-gray-600">Same day & time each week</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">⚙️</div>
              <p className="text-gray-600">Customizable as needed</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Weekly Service Today</h2>
          <Button href="/quote">Get Weekly Quote</Button>
        </div>
      </div>
    </div>
  )
}
