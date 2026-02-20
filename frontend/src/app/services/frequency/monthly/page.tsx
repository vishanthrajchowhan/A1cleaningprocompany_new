'use client'

import Button from '@/components/Button'

export default function MonthlyCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Monthly Cleaning Service</h1>
          <p className="text-xl text-gray-600">
            Cost-effective monthly maintenance to keep your space fresh and organized
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ideal For</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Small Businesses</h3>
                  <p className="text-gray-600">Startups and home-based operations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Budget-Limited</h3>
                  <p className="text-gray-600">Minimal cleaning budget requiring maximum value</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Low Traffic Areas</h3>
                  <p className="text-gray-600">Storage, archives, or infrequently used spaces</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Supplemental Service</h3>
                  <p className="text-gray-600">Supplement in-house or self-cleaning efforts</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Most affordable option</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Easy budgeting and planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Professional deep refresh</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>One-call service activation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What Monthly Service Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Basics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All-surface dusting</li>
                <li>• Complete floor cleaning</li>
                <li>• Restroom sanitization</li>
                <li>• Trash removal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Extras</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Window sills & blinds</li>
                <li>• Base boards</li>
                <li>• Light fixtures</li>
                <li>• Detailed kitchen/break room</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get Started With Monthly Service</h2>
          <Button href="/quote">Request Monthly Quote</Button>
        </div>
      </div>
    </div>
  )
}
