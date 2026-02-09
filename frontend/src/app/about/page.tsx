import Button from '@/components/Button'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About A1cleaning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in professional cleaning services.
          </p>
        </div>

        {/* Company Overview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A1cleaning is a leading provider of professional cleaning solutions for businesses and residential properties. 
                  With years of experience in the industry, we have built a reputation for excellence, reliability, and customer satisfaction.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our team of trained professionals is dedicated to delivering exceptional cleaning services that exceed expectations. 
                  We understand that a clean environment is essential for productivity, health, and peace of mind.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We serve a wide range of clients, from small offices to large commercial facilities, providing customized cleaning 
                  solutions tailored to meet the unique needs of each space.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/a1clean_who.png"
                  alt="Who We Are - A1cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional cleaning services that create healthy, productive, and welcoming environments 
              for our clients. We are committed to using eco-friendly products and sustainable practices while 
              delivering superior results.
            </p>
          </div>
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Our Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span><strong>Quality:</strong> Excellence in every service</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span><strong>Integrity:</strong> Honest and transparent</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span><strong>Reliability:</strong> Always on time, always thorough</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span><strong>Sustainability:</strong> Eco-friendly practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">10+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Proven track record of excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">Certified Professionals</h3>
              <p className="text-gray-600 text-sm">Trained and background-checked staff</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-bold text-lg mb-2">100% Satisfaction</h3>
              <p className="text-gray-600 text-sm">We guarantee your complete satisfaction</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Work With Us?</h2>
          <Button href="/quote">Get Your Free Quote</Button>
        </div>
      </div>
    </div>
  )
}
