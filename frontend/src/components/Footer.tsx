import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">A1cleaning</h3>
            <p className="text-gray-400">
              Professional cleaning services for offices, commercial spaces, and residential properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-white transition">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 ingrid@a1cleaningprocompany.com</li>
              <li>📞 (786) 390-9145</li>
              <li>📍 319 South state road 7, Plantaion, FL</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} A1cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
