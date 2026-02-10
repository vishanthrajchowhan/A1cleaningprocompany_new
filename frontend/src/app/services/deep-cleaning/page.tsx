'use client'

import Button from '@/components/Button'

export default function DeepCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">✨</div>
            <h1 className="text-5xl font-bold text-gray-900">Deep Cleaning</h1>
          </div>
          <p className="text-xl text-gray-600">
            Thorough and intensive cleaning for all areas of your facility
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Wall & Ceiling Cleaning</h3>
                  <p className="text-gray-600">Remove dust, cobwebs, and grime from all surfaces</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Deep Carpet Cleaning</h3>
                  <p className="text-gray-600">Steam cleaning to remove embedded dirt and stains</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Floor Stripping & Waxing</h3>
                  <p className="text-gray-600">Professional restoration of hard floors</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Furniture Detail Cleaning</h3>
                  <p className="text-gray-600">Complete sanitization of all furniture pieces</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">HVAC & Ductwork Cleaning</h3>
                  <p className="text-gray-600">Improve air quality and system efficiency</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kitchen Deep Clean</h3>
                  <p className="text-gray-600">Professional degreasing and sanitization</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Deep Clean?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Eliminate hidden dirt and allergens</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Improve indoor air quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Extend the life of your assets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Create a healthier environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Professional-grade equipment and products</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Customizable frequency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recommended Frequency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Quarterly</h3>
              <p className="text-gray-600">For high-traffic commercial spaces and offices with 20+ employees</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Semi-Annually</h3>
              <p className="text-gray-600">For medium-sized offices and residential properties</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Annually</h3>
              <p className="text-gray-600">For smaller spaces as comprehensive maintenance cleaning</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Deep Clean</h2>
          <Button href="/quote">Request a Quote</Button>
        </div>
      </div>
    </div>
  )
}
