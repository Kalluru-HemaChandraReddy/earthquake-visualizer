import React, { useEffect, useState, useMemo } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import MapView from './components/MapView'
import EarthquakeChart from './components/EarthquakeChart'
import { fetchEarthquakes } from './utils/api'

export default function App() {
  const [quakes, setQuakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [minMag, setMinMag] = useState(0)
  const [maxMag, setMaxMag] = useState(10)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchEarthquakes()
      .then(features => {
        if (!mounted) return
        setQuakes(features)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        if (!mounted) return
        setError(err.message || 'Failed to fetch')
        setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  const filteredQuakes = useMemo(
    () => quakes.filter(f => {
      const mag = f.properties?.mag ?? 0
      return mag >= minMag && mag <= maxMag
    }),
    [quakes, minMag, maxMag]
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-pink-50">
      <Header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 shadow-2xl"/>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Sidebar
              minMag={minMag}
              maxMag={maxMag}
              setMinMag={setMinMag}
              setMaxMag={setMaxMag}
              total={quakes.length}
              filteredCount={filteredQuakes.length}
              quakeList={quakes}
            />
          </aside>

          <section className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[70vh]">
              <MapView quakes={filteredQuakes} loading={loading} error={error} />
            </div>
          </section>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Magnitude distribution (last 24 hours)</h2>
          <EarthquakeChart quakes={filteredQuakes} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
