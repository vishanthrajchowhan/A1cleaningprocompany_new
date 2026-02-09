'use client'

import { useEffect, useState } from 'react'
import ServiceCard from '@/components/ServiceCard'

interface Service {
  id: number
  name: string
  description: string
  icon: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading services...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        )}

        {/* Service Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Cleaning Frequency</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• One-time service</li>
              <li>• Weekly</li>
              <li>• Bi-weekly</li>
              <li>• Monthly</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Service Levels</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Standard clean</li>
              <li>• Deep clean</li>
              <li>• Move-in / Move-out</li>
              <li>• Post-construction</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Add-On Options</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Interior windows</li>
              <li>• Carpet spot treatment</li>
              <li>• Appliance cleaning</li>
              <li>• High-touch disinfection</li>
            </ul>
          </div>
        </div>

        {/* Ideal For */}
        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ideal For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Offices</h3>
              <p>Open offices, private suites, coworking spaces.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Commercial Spaces</h3>
              <p>Retail stores, showrooms, and customer-facing areas.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Managers</h3>
              <p>Move-in / move-out and turnover cleaning services.</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Dusting and surface cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Floor vacuuming and mopping</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Restroom sanitization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Trash removal and recycling</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Kitchen and break room cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Window and glass cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Disinfection of high-touch areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Customizable cleaning plans</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
