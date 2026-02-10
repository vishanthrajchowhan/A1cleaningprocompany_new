'use client'

import Button from '@/components/Button'

export default function MoveInMoveOutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">📦</div>
            <h1 className="text-5xl font-bold text-gray-900">Move-in / Move-out Cleaning</h1>
          </div>
          <p className="text-xl text-gray-600">
            Complete cleaning services for property transitions
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Move-Out Cleaning</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Space Cleaning</h3>
                  <p className="text-gray-600">Every room thoroughly cleaned and sanitized</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Carpet Cleaning</h3>
                  <p className="text-gray-600">Professional removal of stains and odors</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Appliance Cleaning</h3>
                  <p className="text-gray-600">Inside and outside of all kitchen appliances</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Window & Blind Cleaning</h3>
                  <p className="text-gray-600">Crystal clear windows and spotless blinds</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Trash Removal</h3>
                  <p className="text-gray-600">Complete removal of all debris</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Move-In Cleaning</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Sanitization Services</h3>
                  <p className="text-gray-600">Disinfect everything before you move in</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Floor Preparation</h3>
                  <p className="text-gray-600">Deep cleaning and treatment of all floor types</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Cabinet Organization</h3>
                  <p className="text-gray-600">Clean and organize kitchen and bathroom cabinets</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Professional Finish</h3>
                  <p className="text-gray-600">Leave your new space ready to live in</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexible Scheduling</h3>
                  <p className="text-gray-600">Work around your moving timeline</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Our Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Deposit-Friendly</h3>
              <p className="text-gray-600">Our thorough cleaning ensures you get your full security deposit back</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Professional Results</h3>
              <p className="text-gray-600">Standards meet or exceed landlord and real estate requirements</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Quick Turnaround</h3>
              <p className="text-gray-600">Same-day or next-day service available for most properties</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees - you know exactly what you're paying for</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Walk-through and quote</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scheduling</h3>
              <p className="text-gray-600 text-sm">Flexible appointment booking</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional-grade service</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600 text-sm">Quality assurance check</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready for Your Next Move?</h2>
          <Button href="/quote">Schedule Your Cleaning</Button>
        </div>
      </div>
    </div>
  )
}
