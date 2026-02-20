'use client'

import Button from '@/components/Button'

export default function PostConstructionPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Post-Construction Cleaning</h1>
          <p className="text-xl text-gray-600">
            Specialized cleanup for construction and renovation projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Clean</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Dust & debris removal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Paint drips & splatters</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Concrete & floor residue</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Window & glass cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Door & frame cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Light fixture installation cleanup</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Final polish & shine</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Professional Service</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Specialized equipment & techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Safe handling of hazardous materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Insured & bonded service</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Quick turnaround time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Move-in ready results</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Inspection</h3>
                <p className="text-gray-600">We assess the project scope and construction dust level</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Debris Removal</h3>
                <p className="text-gray-600">Clear out large debris and construction waste</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Detail Cleaning</h3>
                <p className="text-gray-600">Thorough cleaning of all surfaces and tight spaces</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Final Inspection</h3>
                <p className="text-gray-600">Quality check to ensure move-in ready condition</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-red-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Typical Projects We Clean</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-700">
              <li>• New residential homes</li>
              <li>• Commercial office renovations</li>
              <li>• Retail store buildouts</li>
              <li>• Kitchen remodels</li>
              <li>• Bathroom updates</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Flooring installations</li>
              <li>• Painting projects</li>
              <li>• HVAC installations</li>
              <li>• Landscape projects</li>
              <li>• Complete renovations</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Move In?</h2>
          <Button href="/quote">Get Post-Construction Quote</Button>
        </div>
      </div>
    </div>
  )
}
