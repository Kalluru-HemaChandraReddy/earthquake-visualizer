import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function EarthquakeChart({ quakes = [] }) {
  // bins 0-1, 1-2, ..., 9-10
  const bins = useMemo(() => Array.from({ length: 10 }, (_, i) => `${i}-${i+1}`), [])
  const counts = useMemo(() => {
    const c = Array(10).fill(0)
    quakes.forEach(q => {
      const mag = q.properties?.mag ?? 0
      const idx = Math.max(0, Math.min(9, Math.floor(mag))) // 0..9
      c[idx]++
    })
    return c
  }, [quakes])

  const data = {
    labels: bins,
    datasets: [
      {
        label: 'Number of quakes',
        data: counts,
        backgroundColor: 'rgba(99,102,241,0.85)'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { ticks: { maxRotation: 0 } },
      y: { beginAtZero: true, precision: 0 }
    }
  }

  return <div className="h-48"><Bar data={data} options={options} /></div>
}
