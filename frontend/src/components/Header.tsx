'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="A1 Cleaning Pro Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-primary-600">A1 Cleaning Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About Us
            </Link>
            <Link href="/quote" className="text-gray-700 hover:text-primary-600 transition">
              Request a Quote
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
            <Button href="/quote" className="ml-2 scale-110 hover:scale-100 transition-transform">
              Get Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary-600">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-primary-600">
              Services
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-600">
              About Us
            </Link>
            <Link href="/quote" className="block text-gray-700 hover:text-primary-600">
              Request a Quote
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary-600">
              Contact
            </Link>
            <Button href="/quote" className="w-full">
              Get Free Estimate
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
