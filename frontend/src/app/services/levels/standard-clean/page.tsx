'use client'

import Button from '@/components/Button'

export default function StandardCleanPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Standard Clean</h1>
          <p className="text-xl text-gray-600">
            Regular maintenance cleaning for everyday spaces
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Includes</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Vacuuming & sweeping</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Mopping hard floors</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Dusting surfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Bathroom cleaning & disinfection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Kitchen surface cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Trash removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Window blinds wiping</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Best For</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Regular maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Weekly/bi-weekly schedules</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Ongoing commercial spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Well-maintained offices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Cost-effective cleaning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Standard Clean?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-700">Perfect for spaces that don't require deep attention but need consistent maintenance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Affordability</h3>
              <p className="text-gray-700">Most budget-friendly option without sacrificing quality or professionalism.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-700">Consistent results that keep your space presentable at all times.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Quick Turnaround</h3>
              <p className="text-gray-700">Efficient service that doesn't disrupt daily operations.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready for Standard Cleaning?</h2>
          <Button href="/quote">Request Standard Clean Quote</Button>
        </div>
      </div>
    </div>
  )
}
