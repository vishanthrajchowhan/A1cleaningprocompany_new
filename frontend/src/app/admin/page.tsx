'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/Button'

interface Quote {
  id: number
  name: string
  email: string
  phone: string
  facility_type: string
  square_footage: string
  details: string
  status?: string
  created_at: string
}

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  message: string
  status?: string
  created_at: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [activeTab, setActiveTab] = useState<'quotes' | 'contacts'>('quotes')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === '123456') {
      setIsAuthenticated(true)
      fetchData()
    } else {
      alert('Incorrect password')
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [quotesRes, contactsRes] = await Promise.all([
        fetch('/api/admin/quotes'),
        fetch('/api/admin/contacts')
      ])

      if (quotesRes.ok) {
        const data = await quotesRes.json()
        setQuotes(data)
      }

      if (contactsRes.ok) {
        const data = await contactsRes.json()
        setContacts(data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  const handleQuoteStatusChange = async (id: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/quotes/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      if (response.ok) {
        setQuotes(quotes.map(q => 
          q.id === id ? { ...q, status: newStatus } : q
        ))
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleContactStatusChange = async (id: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      if (response.ok) {
        setContacts(contacts.map(c => 
          c.id === id ? { ...c, status: newStatus } : c
        ))
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'approved':
        return 'bg-green-200 text-green-800 hover:bg-green-300'
      case 'rejected':
        return 'bg-red-200 text-red-800 hover:bg-red-300'
      case 'replied':
        return 'bg-blue-200 text-blue-800 hover:bg-blue-300'
      default:
        return 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
    }
  }

  const getStatusLabel = (status: string | undefined) => {
    switch (status) {
      case 'approved':
        return '✓ Approved'
      case 'rejected':
        return '✗ Rejected'
      case 'replied':
        return '✓ Replied'
      default:
        return 'Pending'
    }
  }

  const getStatusBgColor = (status: string | undefined) => {
    switch (status) {
      case 'approved':
        return 'bg-green-50'
      case 'rejected':
        return 'bg-red-50'
      case 'replied':
        return 'bg-blue-50'
      default:
        return ''
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mb-6">Enter password to access the dashboard</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-6"
            />
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage inquiries and quotes</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'quotes'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Quote Requests ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'contacts'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Contact Messages ({contacts.length})
          </button>
        </div>

        {/* Quotes Table */}
        {activeTab === 'quotes' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Facility Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sq. Footage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                        No quote requests yet
                      </td>
                    </tr>
                  ) : (
                    quotes.map((quote) => (
                      <tr key={quote.id} className={`border-b border-gray-200 hover:bg-gray-50 ${getStatusBgColor(quote.status)}`}>
                        <td className="px-6 py-4 text-sm">
                          <select
                            value={quote.status || 'pending'}
                            onChange={(e) => handleQuoteStatusChange(quote.id, e.target.value)}
                            className={`px-3 py-1 rounded text-xs font-semibold border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 ${getStatusColor(quote.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="replied">Replied</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{quote.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 capitalize">{quote.facility_type}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.square_footage} sq ft</td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{quote.details}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(quote.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Contacts Table */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Message</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        No contact messages yet
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id} className={`border-b border-gray-200 hover:bg-gray-50 ${getStatusBgColor(contact.status)}`}>
                        <td className="px-6 py-4 text-sm">
                          <select
                            value={contact.status || 'pending'}
                            onChange={(e) => handleContactStatusChange(contact.id, e.target.value)}
                            className={`px-3 py-1 rounded text-xs font-semibold border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 ${getStatusColor(contact.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="replied">Replied</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{contact.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{contact.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{contact.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{contact.message}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
