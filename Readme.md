# 🌍 Earthquake Visualizer

![Project Banner](./public/banner.png) <!-- Optional banner image -->

**Earthquake Visualizer** is a modern, interactive web application that displays **real-time earthquake data** from the USGS API. Explore earthquakes worldwide, see magnitude distributions, and interact with a fully responsive map.

---

## 🚀 Live Demo
[🔗 Visit the Live Site](#) <!-- Replace with your Vercel/Netlify link once deployed -->

---

## 📌 Features

- Live earthquake data from [USGS API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)
- Interactive **Leaflet map** with markers:
  - Marker size and color reflect earthquake magnitude
  - Clickable popups showing location, magnitude, and time
- **Sidebar filters** to select magnitude ranges
- **Magnitude distribution chart** using Chart.js
- Fully **responsive** and modern UI with Tailwind CSS
- Optional **dark mode toggle**
- Footer with **social media links**

---

## 🛠 Tech Stack

- **React** – Frontend framework
- **Vite** – Development server & build tool
- **Tailwind CSS** – Styling
- **Leaflet + React-Leaflet** – Interactive maps
- **Chart.js + react-chartjs-2** – Charts and data visualization
- **React Icons / Lucide-React** – Icons

---

## 📁 Folder Structure

src/
├─ components/ # Header, Footer, Sidebar, MapView, EarthquakeChart
├─ hooks/ # Custom React hooks (useDarkMode)
├─ utils/ # API fetch functions
├─ App.jsx # Main app layout
└─ main.jsx # Entry point



---

## ⚡ Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/Kalluru-HemaChandraReddy/earthquake-visualizer.git
cd earthquake-visualizer
 ```


##
Install dependencies:

npm install


Start development server:

npm run dev

Open your browser at http://localhost:5173

Homepage
<img width="1874" height="875" alt="image" src="https://github.com/user-attachments/assets/164e0bb8-f6b9-4ae5-bd38-14097a3cff6e" />


Magnitude Chart
<img width="1874" height="935" alt="image" src="https://github.com/user-attachments/assets/b6f69de5-0839-4e80-bf1b-4f602faeda10" />


Replace these images with your actual screenshots   


📖 How it Works

Fetch Earthquake Data – The app uses USGS API to fetch earthquakes of the last 24 hours.

Map Visualization – Each earthquake is displayed as a colored and sized marker based on magnitude.

Filters – Sidebar allows filtering earthquakes by magnitude range.

Charts – Chart.js shows magnitude distribution for a quick overview.

Dark Mode – Optional toggle changes the theme.

🔗 Social Links

Connect with me:

Instagram 

GitHub

LinkedIn

YouTube    

🏷 Badges :
LIVE URL :https://earthquake-visualizer-hemachandra.vercel.app/ 



