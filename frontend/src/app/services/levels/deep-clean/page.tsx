'use client'

import Button from '@/components/Button'

export default function DeepCleanPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Deep Clean</h1>
          <p className="text-xl text-gray-600">
            Intensive cleaning that tackles hard-to-reach areas and stubborn dirt
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Includes Everything Plus</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Carpet shampooing & stain removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Baseboards & wall cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Inside appliances & cabinets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Ceiling fan & light fixture cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Door frames & window tracks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Wall corner & trim cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Floor perimeter cleaning</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ideal For</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Move-in/move-out deep cleans</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Post-event thorough clean</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Quarterly/annual maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Neglected or heavily soiled spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Pre-inspection property cleaning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recommended Frequency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-2">High Traffic</p>
              <p className="text-2xl font-bold text-green-600">Quarterly</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-2">Normal Use</p>
              <p className="text-2xl font-bold text-green-600">2x Yearly</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 font-semibold mb-2">Low Traffic</p>
              <p className="text-2xl font-bold text-green-600">Annually</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-orange-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Deep Clean Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">1</span>
              <div>
                <h3 className="font-semibold">Extends lifespan of surfaces</h3>
                <p className="text-sm">Regular deep cleaning prevents permanent damage</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">2</span>
              <div>
                <h3 className="font-semibold">Improves air quality</h3>
                <p className="text-sm">Removes accumulated dust and allergens</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">3</span>
              <div>
                <h3 className="font-semibold">Increases property value</h3>
                <p className="text-sm">Well-maintained spaces command higher value</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">4</span>
              <div>
                <h3 className="font-semibold">Reduces health hazards</h3>
                <p className="text-sm">Deep disinfection eliminates bacteria & pathogens</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Deep Clean</h2>
          <Button href="/quote">Request Deep Clean Quote</Button>
        </div>
      </div>
    </div>
  )
}
