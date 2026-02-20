'use client'

import Button from '@/components/Button'

export default function BiWeeklyCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Bi-Weekly Cleaning Service</h1>
          <p className="text-xl text-gray-600">
            Every other week cleaning for balanced maintenance and cost efficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Perfect For</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Small Offices</h3>
                  <p className="text-gray-600">5-15 employees with moderate foot traffic</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Light Commercial</h3>
                  <p className="text-gray-600">Retail stores, waiting areas, showrooms</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Budget-Conscious</h3>
                  <p className="text-gray-600">Want consistency without weekly cost</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Maintenance Mode</h3>
                  <p className="text-gray-600">Keep spaces clean between deep cleans</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Advantages</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Better value than weekly service</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>More frequent than monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Predictable results</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Manageable clutter buildup</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Dedicated cleaning team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
              <p className="text-gray-600">Times per month</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
              <p className="text-gray-600">Days apart</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24</div>
              <p className="text-gray-600">Times per year</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">💰</div>
              <p className="text-gray-600">Optimal value</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Bi-Weekly Cleaning</h2>
          <Button href="/quote">Request Bi-Weekly Quote</Button>
        </div>
      </div>
    </div>
  )
}
