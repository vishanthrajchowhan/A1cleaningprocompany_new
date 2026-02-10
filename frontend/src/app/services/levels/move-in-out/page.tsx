'use client'

import Button from '@/components/Button'

export default function MoveInOutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Move-In / Move-Out Cleaning</h1>
          <p className="text-xl text-gray-600">
            Specialized cleaning for property transitions
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Move-Out Cleaning</h2>
            <p className="text-gray-600 mb-4">Preparing the space for the next occupant:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Complete deep clean of all areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Carpet shampooing & stain removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Wall spot cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Appliance & cabinet cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Paint touch-ups (minor)</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Move-In Cleaning</h2>
            <p className="text-gray-600 mb-4">Setting up a spotless new space:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Deep clean after previous occupant</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Sanitize all surfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Kitchen & appliance deep sanitizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Bathroom deep disinfection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Help organize/arrange furniture</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-primary-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why You Need Professional Cleaning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Deposit Protection</h3>
              <p className="text-gray-700">Thorough cleaning ensures you get your full security deposit back from landlords.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Time Saving</h3>
              <p className="text-gray-700">Moving is stressful enough. Let us handle the cleaning while you unpack.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Professional Standards</h3>
              <p className="text-gray-700">We meet or exceed landlord and property manager expectations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Health & Safety</h3>
              <p className="text-gray-700">Ensure the space is sanitized and safe for occupancy from day one.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Deposit Guarantee</h2>
          <div className="bg-white p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              <strong>We guarantee our move-out cleaning will help you retain your full security deposit.</strong> If you lose deposit money due to cleanliness issues we could have prevented, we'll reimburse the difference (up to the cost of our service).
            </p>
            <p className="text-sm text-gray-500">*Terms and conditions apply. See our full guarantee details.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Move-Out Pricing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Studio: $200-350</li>
              <li>1 Bedroom: $300-500</li>
              <li>2 Bedroom: $400-700</li>
              <li>3+ Bedroom: $600+</li>
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Move-In Pricing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Studio: $250-400</li>
              <li>1 Bedroom: $350-550</li>
              <li>2 Bedroom: $500-800</li>
              <li>3+ Bedroom: $700+</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Move Cleaning</h2>
          <Button href="/quote">Request Move-In/Out Quote</Button>
        </div>
      </div>
    </div>
  )
}
