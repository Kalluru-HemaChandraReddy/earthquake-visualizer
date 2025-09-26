const USGS_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export async function fetchEarthquakes() {
  const res = await fetch(USGS_URL);
  if (!res.ok) {
    throw new Error(`USGS API error: ${res.status}`);
  }
  const json = await res.json();
  // returns an array of features
  return json.features || [];
}
