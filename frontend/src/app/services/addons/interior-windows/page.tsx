'use client'

import Button from '@/components/Button'

export default function InteriorWindowsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Interior Windows Cleaning</h1>
          <p className="text-xl text-gray-600">
            Crystal clear windows for a brighter, more professional appearance
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Includes</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Interior window glass cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Window frame & track cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Blind/shade wiping</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Sill & ledge cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Streak-free shine</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why It Matters</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Creates first impression immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Improves natural lighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Reduces dust accumulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Professional appearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Extends window lifespan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Best For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🏪</div>
              <p className="font-semibold text-gray-900">Retail Spaces</p>
              <p className="text-sm text-gray-600">Display windows & storefronts</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏢</div>
              <p className="font-semibold text-gray-900">Office Buildings</p>
              <p className="text-sm text-gray-600">Professional appearance</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏠</div>
              <p className="font-semibold text-gray-900">Residential</p>
              <p className="text-sm text-gray-600">Homes & apartments</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-3">Small Package</p>
              <p className="text-2xl font-bold text-yellow-600">$50-100</p>
              <p className="text-sm text-gray-500">1-10 windows</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-3">Medium Package</p>
              <p className="text-2xl font-bold text-yellow-600">$100-200</p>
              <p className="text-sm text-gray-500">11-25 windows</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-3">Large Package</p>
              <p className="text-2xl font-bold text-yellow-600">$200+</p>
              <p className="text-sm text-gray-500">25+ windows</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Add Windows to Your Order</h2>
          <Button href="/quote">Add Interior Windows Cleaning</Button>
        </div>
      </div>
    </div>
  )
}
