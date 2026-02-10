'use client'

import Button from '@/components/Button'

export default function CommercialCleaningPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">🏪</div>
            <h1 className="text-5xl font-bold text-gray-900">Commercial Cleaning</h1>
          </div>
          <p className="text-xl text-gray-600">
            Comprehensive cleaning solutions for retail and commercial properties
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Services We Provide</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Retail Store Cleaning</h3>
                  <p className="text-gray-600">Keep your products and displays pristine and attractive to customers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Lobby & Entrance Maintenance</h3>
                  <p className="text-gray-600">Professional first impressions for your customers and clients</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">High-Traffic Area Cleaning</h3>
                  <p className="text-gray-600">Extra attention to areas with heavy foot traffic</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Window & Glass Cleaning</h3>
                  <p className="text-gray-600">Crystal clear windows to showcase your business</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Carpet & Upholstery Care</h3>
                  <p className="text-gray-600">Professional stain removal and deep cleaning</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-2xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Outdoor Maintenance</h3>
                  <p className="text-gray-600">Parking lot and exterior area cleaning</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Commercial Advantages</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>24/7 availability for after-hours cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Large-scale operation capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Bonded and insured professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Consistent quality across all visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Professional reporting and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">✓</span>
                <span>Corporate account management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Industry Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Commercial Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500K+</div>
              <p className="text-gray-600">Sq Ft Cleaned Monthly</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Transform Your Commercial Space</h2>
          <Button href="/quote">Get a Commercial Quote</Button>
        </div>
      </div>
    </div>
  )
}
