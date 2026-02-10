'use client'

import Button from '@/components/Button'

export default function HighTouchDisinfectionPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">High-Touch Disinfection</h1>
          <p className="text-xl text-gray-600">
            Enhanced sanitization for health and safety
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What Gets Disinfected</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Doorknobs & door handles</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Light switches & outlets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Desk surfaces & keyboards</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Phone & touch screens</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Handrails & guardrails</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Restroom fixtures</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Remote controls & shared items</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">1</span>
                <span>EPA-approved disinfectants</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">2</span>
                <span>Contact time adherence</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">3</span>
                <span>Chemical-safe materials only</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">4</span>
                <span>Kills 99.9% of germs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">5</span>
                <span>Safe for families & pets</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-red-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why High-Touch Disinfection Matters</h2>
          <div className="bg-white p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              Studies show that 80% of infectious diseases spread through contact with contaminated surfaces. High-touch surfaces in offices, stores, and homes accumulate bacteria, viruses, and pathogens that regular cleaning may not eliminate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="font-bold text-red-600">5 Min</p>
                <p className="text-gray-600">Virus survival on phone</p>
              </div>
              <div>
                <p className="font-bold text-red-600">9 Days</p>
                <p className="text-gray-600">Germs on doorknob</p>
              </div>
              <div>
                <p className="font-bold text-red-600">48 Hours</p>
                <p className="text-gray-600">Virus on plastic surface</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ideal For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🏥 Healthcare Facilities</h3>
              <p className="text-sm">Hospitals, clinics, urgent care waiting areas</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🏢 Corporate Offices</h3>
              <p className="text-sm">Employee safety & infection prevention</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🏪 Retail Stores</h3>
              <p className="text-sm">Customer confidence & safety</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🏠 Homes with Children</h3>
              <p className="text-sm">Extra protection for vulnerable populations</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🍽️ Food Service Areas</h3>
              <p className="text-sm">Safe food handling environment</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🎓 Schools & Daycares</h3>
              <p className="text-sm">Protect children from illness transmission</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Disinfection Program Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-lg text-gray-900 mb-3">One-Time</p>
              <p className="text-2xl font-bold text-blue-600 mb-2">$150-300</p>
              <p className="text-sm text-gray-600">Single disinfection service</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-lg text-gray-900 mb-3">Monthly</p>
              <p className="text-2xl font-bold text-blue-600 mb-2">$300-600/mo</p>
              <p className="text-sm text-gray-600">Regular protection program</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-lg text-gray-900 mb-3">Weekly</p>
              <p className="text-2xl font-bold text-blue-600 mb-2">$600-1200/mo</p>
              <p className="text-sm text-gray-600">Maximum protection available</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Safety Certifications</h2>
          <p className="text-gray-700 mb-4">Our disinfection services use products certified by:</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ EPA (Environmental Protection Agency) approved</li>
            <li>✓ CDC (Centers for Disease Control) recommended</li>
            <li>✓ Non-toxic for families and pets</li>
            <li>✓ OSHA compliant for workplace safety</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Protect Your Space Today</h2>
          <Button href="/quote">Request Disinfection Service</Button>
        </div>
      </div>
    </div>
  )
}
