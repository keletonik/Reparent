'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReparentLogo, ReparentWordmark, CheckIcon } from '@/components/ui/Icons'

interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  mobile: string
  company: string
  verified: boolean
  createdAt: string
  lastLogin: string | null
}

export default function AdminPage() {
  const router = useRouter()
  const [users, setUsers] = useState<UserData[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/users')
      if (res.status === 401) {
        router.push('/login')
        return
      }
      const data = await res.json()
      if (res.ok) {
        setUsers(data.users)
        setTotal(data.total)
      } else {
        setError(data.error || 'Failed to load users')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const filteredUsers = users.filter((user) => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.company.toLowerCase().includes(term)
    )
  })

  const verifiedCount = users.filter((u) => u.verified).length
  const recentCount = users.filter((u) => {
    const created = new Date(u.createdAt)
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    return created > dayAgo
  }).length

  return (
    <div className="min-h-screen bg-warmth-50">
      {/* Header */}
      <header className="bg-white border-b border-calm-100">
        <div className="page-width py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <ReparentLogo size={28} />
              <ReparentWordmark className="text-lg" />
            </Link>
            <span className="badge bg-calm-100 text-calm-700">Admin</span>
          </div>
          <Link href="/dashboard" className="btn-ghost text-sm">
            Back to App
          </Link>
        </div>
      </header>

      <div className="page-width py-8">
        <h1 className="text-3xl font-serif font-bold text-calm-900">Signup Overview</h1>
        <p className="mt-2 text-calm-600">Manage registered users and view signup activity</p>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="card p-6">
            <p className="text-sm text-calm-500">Total Signups</p>
            <p className="text-3xl font-bold text-calm-900 mt-1">{total}</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-calm-500">Verified Users</p>
            <p className="text-3xl font-bold text-brand-600 mt-1">{verifiedCount}</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-calm-500">Last 24 Hours</p>
            <p className="text-3xl font-bold text-warmth-600 mt-1">{recentCount}</p>
          </div>
        </div>

        {/* Search and Table */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-calm-900">All Users</h2>
            <button onClick={fetchUsers} className="btn-ghost text-sm">
              Refresh
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field max-w-md"
              placeholder="Search by name, email, or company..."
            />
          </div>

          {loading ? (
            <div className="card p-12 text-center">
              <p className="text-calm-500">Loading users...</p>
            </div>
          ) : error ? (
            <div className="card p-12 text-center">
              <p className="text-safety-600">{error}</p>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-calm-500">
                {searchTerm ? 'No users match your search' : 'No signups yet'}
              </p>
            </div>
          ) : (
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-calm-100 bg-calm-50">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider">Name</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider">Email</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider hidden md:table-cell">Phone</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider hidden lg:table-cell">Company</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider">Status</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-calm-600 uppercase tracking-wider hidden sm:table-cell">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-calm-100">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-calm-50 transition-colors">
                        <td className="px-4 py-3">
                          <p className="font-medium text-calm-900 text-sm">
                            {user.firstName} {user.lastName}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-calm-600 text-sm">{user.email}</p>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <p className="text-calm-600 text-sm">{user.mobile || user.phone || '—'}</p>
                        </td>
                        <td className="px-4 py-3 hidden lg:table-cell">
                          <p className="text-calm-600 text-sm">{user.company || '—'}</p>
                        </td>
                        <td className="px-4 py-3">
                          {user.verified ? (
                            <span className="inline-flex items-center gap-1 badge bg-brand-50 text-brand-700">
                              <CheckIcon size={12} />
                              Verified
                            </span>
                          ) : (
                            <span className="badge bg-warmth-100 text-warmth-700">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <p className="text-calm-500 text-sm">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
