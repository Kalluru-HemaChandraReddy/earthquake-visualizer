import React, { useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'

function FitBounds({ positions }) {
  const map = useMap()
  useEffect(() => {
    if (!positions || positions.length === 0) return
    map.fitBounds(positions, { padding: [40, 40] })
  }, [positions, map])
  return null
}

function getColor(mag) {
  if (mag >= 7) return '#7f0000'
  if (mag >= 6) return '#d62828'
  if (mag >= 5) return '#f77f00'
  if (mag >= 4) return '#fcbf49'
  if (mag >= 3) return '#e9ff70'
  return '#a8ff78'
}

export default function MapView({ quakes = [], loading, error }) {
  const positions = quakes
    .map(f => f.geometry && f.geometry.coordinates ? [f.geometry.coordinates[1], f.geometry.coordinates[0]] : null)
    .filter(Boolean)

  return (
    <div className="relative h-full w-full">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
      <TileLayer
  attribution='&copy; OpenStreetMap contributors'
  url={document.documentElement.classList.contains('dark')
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
/>


        <FitBounds positions={positions} />

        {quakes.map(f => {
          if (!f.geometry || !f.geometry.coordinates) return null
          const [lon, lat, depth] = f.geometry.coordinates
          const mag = f.properties?.mag ?? 0
          const radius = 3 + Math.pow(Math.max(mag, 0), 1.6) * 2 // perceptual scaling
          const color = getColor(mag)

          return (
            <CircleMarker
              key={f.id}
              center={[lat, lon]}
              radius={radius}
              fillColor={color}
              color="rgba(0,0,0,0.12)"
              weight={0.8}
              fillOpacity={0.9}
            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{f.properties?.place}</div>
                  <div className="mt-1">Magnitude: <strong>{mag}</strong></div>
                  <div>Depth: {depth} km</div>
                  <div className="mt-1 text-xs text-slate-600">Time: {new Date(f.properties?.time).toLocaleString()}</div>
                </div>
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>

      {/* Legend (absolute element on top of the map) */}
      <div className="absolute right-4 top-4 p-3 bg-white/90 rounded-lg shadow-md text-xs z-10">
        <div className="font-semibold text-sm mb-2">Magnitude</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#a8ff78] inline-block rounded-sm" /> 0–3</div>
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#e9ff70] inline-block rounded-sm" /> 3–4</div>
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#fcbf49] inline-block rounded-sm" /> 4–5</div>
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#f77f00] inline-block rounded-sm" /> 5–6</div>
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#d62828] inline-block rounded-sm" /> 6–7</div>
          <div className="flex items-center gap-2"><span className="w-4 h-4 bg-[#7f0000] inline-block rounded-sm" /> 7+</div>
        </div>
      </div>

      {/* Loading / Error badges */}
      {loading && <div className="absolute left-4 top-4 px-3 py-2 bg-indigo-600 text-white rounded-lg shadow z-10">Loading…</div>}
      {error && <div className="absolute left-4 top-16 px-3 py-2 bg-red-600 text-white rounded-lg shadow z-10">Error: {error}</div>}
    </div>
  )
}
