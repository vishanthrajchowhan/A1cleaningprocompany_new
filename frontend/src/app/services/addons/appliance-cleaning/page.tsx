'use client'

import Button from '@/components/Button'

export default function ApplianceCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Appliance Cleaning</h1>
          <p className="text-xl text-gray-600">
            Deep cleaning for your kitchen and laundry appliances
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Appliances We Clean</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Refrigerator (inside & out)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Microwave & stovetop</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Oven cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Dishwasher</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Washing machine & dryer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">Coffee makers & smaller appliances</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <p className="font-semibold">Interior Deep Clean</p>
                <p className="text-sm">Remove grease, grime, food residue</p>
              </li>
              <li>
                <p className="font-semibold">Exterior Polish</p>
                <p className="text-sm">Streak-free shine on stainless steel</p>
              </li>
              <li>
                <p className="font-semibold">Part Sanitization</p>
                <p className="text-sm">Drip pans, vents, filters cleaned</p>
              </li>
              <li>
                <p className="font-semibold">Deodorization</p>
                <p className="text-sm">Eliminate odors naturally</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">🏆 Performance</h3>
              <p className="text-gray-700">Clean appliances run more efficiently and last longer, saving you money on energy bills.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">⚕️ Health</h3>
              <p className="text-gray-700">Reduces bacteria growth and mold that can affect food safety and air quality.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✨ Appearance</h3>
              <p className="text-gray-700">Sparkling clean appliances make your entire kitchen look new and well-maintained.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">💰 Value</h3>
              <p className="text-gray-700">Maintain resale property value and show potential buyers your meticulous upkeep.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Individual Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Kitchen Appliances</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Refrigerator: $50-80</li>
                <li>Oven: $75-120</li>
                <li>Microwave: $30-50</li>
                <li>Stovetop: $40-60</li>
                <li>Dishwasher: $35-50</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Laundry Appliances</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Washing Machine: $50-80</li>
                <li>Dryer: $40-60</li>
                <li>Combo Package: $80-120</li>
                <li>Coffee Maker: $15-30</li>
                <li>Toaster: $15-25</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Bundle Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-yellow-600">
              <p className="font-semibold text-lg text-gray-900 mb-2">Full Kitchen Package</p>
              <p className="text-2xl font-bold text-yellow-600 mb-2">$250-350</p>
              <p className="text-sm text-gray-600">Fridge, oven, stovetop, microwave, dishwasher</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-yellow-600">
              <p className="font-semibold text-lg text-gray-900 mb-2">Laundry Room Package</p>
              <p className="text-2xl font-bold text-yellow-600 mb-2">$120-180</p>
              <p className="text-sm text-gray-600">Washer, dryer, and surrounding deep clean</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Add Appliance Cleaning Today</h2>
          <Button href="/quote">Request Appliance Cleaning</Button>
        </div>
      </div>
    </div>
  )
}
