import React from 'react'

export default function Sidebar({ minMag, maxMag, setMinMag, setMaxMag, total, filteredCount, quakeList = [] }) {

  const topQuakes = [...quakeList]
    .filter(q => typeof q.properties?.mag === 'number')
    .sort((a,b) => (b.properties.mag || 0) - (a.properties.mag || 0))
    .slice(0, 6)

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-100 p-5 rounded-2xl shadow-xl space-y-6">
  <h3 className="text-xl font-bold text-indigo-700">Filters</h3>

  {/* Quick Stats */}
  <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-inner">
    <p className="text-sm text-slate-700">Total Quakes: <span className="font-bold">{total}</span></p>
    <p className="text-sm text-slate-700">Visible: <span className="font-bold">{filteredCount}</span></p>
  </div>

  {/* Sliders */}
  <div>
    <label className="block text-sm font-medium text-slate-600">Min Magnitude ({minMag})</label>
    <input
      type="range"
      min="0"
      max="10"
      step="0.1"
      value={minMag}
      onChange={e => setMinMag(Math.min(Number(e.target.value), maxMag))}
      className="w-full accent-indigo-600"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-slate-600">Max Magnitude ({maxMag})</label>
    <input
      type="range"
      min="0"
      max="10"
      step="0.1"
      value={maxMag}
      onChange={e => setMaxMag(Math.max(Number(e.target.value), minMag))}
      className="w-full accent-pink-600"
    />
  </div>

  {/* Reset Button */}
  <button
    onClick={() => { setMinMag(0); setMaxMag(10) }}
    className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-3 py-2 rounded-lg shadow hover:scale-105 transition"
  >
    Reset Filters
  </button>
</div>
  )
}
