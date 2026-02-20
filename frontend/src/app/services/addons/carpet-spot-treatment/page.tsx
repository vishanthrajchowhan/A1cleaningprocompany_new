'use client'

import Button from '@/components/Button'

export default function CarpetSpotTreatmentPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Carpet Spot Treatment</h1>
          <p className="text-xl text-gray-600">
            Targeted stain removal for a flawless appearance
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Treat</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Coffee & tea stains</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Wine & juice spills</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Grease & oil marks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Dirt & mud spots</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Pet accidents</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Ink & marker</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Approach</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">1</span>
                <span>Stain identification & assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">2</span>
                <span>Pre-treatment application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">3</span>
                <span>Professional extraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">4</span>
                <span>Drying & final inspection</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Success Rate</h2>
          <div className="text-center mb-6">
            <p className="text-6xl font-bold text-green-600 mb-2">92%</p>
            <p className="text-xl text-gray-700">Stain removal success rate</p>
          </div>
          <p className="text-gray-700 text-center">
            Using professional-grade cleaning solutions and equipment, we successfully remove most carpet stains. Fresh stains have higher success rates than older set-in stains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Professional Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">❌ DIY Risks</h3>
              <ul className="space-y-2 text-sm">
                <li>• Can spread the stain</li>
                <li>• May damage carpet fibers</li>
                <li>• Wrong products = permanent damage</li>
                <li>• Sets stain deeper in fibers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ Professional</h3>
              <ul className="space-y-2 text-sm">
                <li>• Proper stain identification</li>
                <li>• Safe, effective solutions</li>
                <li>• Professional extraction</li>
                <li>• Carpet longevity preserved</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Treat Your Carpet Today</h2>
          <Button href="/quote">Add Carpet Treatment</Button>
        </div>
      </div>
    </div>
  )
}
