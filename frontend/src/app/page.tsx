import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import type { Metadata } from 'next'
import { buildMetadata } from './seo'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Cleaning Services',
  description:
    'Reliable office, commercial, and residential cleaning services with flexible plans and transparent pricing.',
  path: '/',
  keywords: [
    'cleaning services',
    'office cleaning',
    'commercial cleaning',
    'deep cleaning',
    'move in move out cleaning',
  ],
})

export default function Home() {
  const services = [
    {
      name: 'Office Cleaning',
      description: 'Professional cleaning services for offices and corporate spaces.',
      icon: 'office'
    },
    {
      name: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for retail and commercial properties.',
      icon: 'commercial'
    },
    {
      name: 'Deep Cleaning',
      description: 'Thorough and intensive cleaning for all areas of your facility.',
      icon: 'deep'
    },
    {
      name: 'Move-in / Move-out Cleaning',
      description: 'Complete cleaning services for property transitions.',
      icon: 'moving'
    }
  ]

  const testimonials = [
    {
      name: 'Maria G.',
      role: 'Office Manager, Plantation',
      quote:
        'A1cleaning has been incredibly consistent. Our office looks spotless every morning and our staff always notices the difference.',
      rating: 5,
    },
    {
      name: 'Daniel R.',
      role: 'Property Manager, Fort Lauderdale',
      quote:
        'They handled our move-out clean on a tight timeline and delivered beyond expectations. Great communication and excellent results.',
      rating: 5,
    },
    {
      name: 'Sofia L.',
      role: 'Small Business Owner, Sunrise',
      quote:
        'Professional team, fair pricing, and no surprises. We moved to a weekly plan after the first visit because the quality was so good.',
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">
                Professional Cleaning Services You Can Trust
              </h1>
              <p className="text-xl mb-8">
                We provide exceptional cleaning services for offices, commercial spaces, and residential properties.
              </p>
              <Button href="/quote" variant="secondary">
                Request a Quote
              </Button>
            </div>
            <div className="flex-1">
              <Image
                src="/images/cleaning.png"
                alt="Professional Cleaning Services"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose A1cleaning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We deliver exceptional cleaning results with attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">Trained Professionals</h3>
              <p className="text-gray-600">
                Our team consists of experienced and certified cleaning professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                We use environmentally safe cleaning products that are effective and safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Trusted by offices, property managers, and business owners across South Florida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="text-yellow-500 text-lg mb-3">{'★'.repeat(testimonial.rating)}</div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable & Transparent */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Affordable, Transparent Cleaning</h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional service should be straightforward. We offer fair, competitive pricing with no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Upfront Quotes</h3>
              <p className="text-gray-600">Clear estimates based on your space size and service needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Plans</h3>
              <p className="text-gray-600">Choose one-time, weekly, or monthly service on your schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">No Hidden Fees</h3>
              <p className="text-gray-600">Honest pricing with optional add-ons only when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Get a free quote today and see how we can help keep your space spotless.
          </p>
          <Button href="/quote" variant="secondary">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  )
}
