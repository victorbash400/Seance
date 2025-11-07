"use client";

import * as RSM from "react-simple-maps";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SmokeBackground from "./SmokeBackground";
import SpookyElements from "./SpookyElements";

const { ComposableMap, Geographies, Geography, Marker } = RSM;

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Manual coordinates for major countries (longitude, latitude)
const countryMarkers = [
  { iso: "USA", name: "United States", geoName: "United States of America", coords: [-95, 38] },
  { iso: "CAN", name: "Canada", geoName: "Canada", coords: [-106, 56] },
  { iso: "BRA", name: "Brazil", geoName: "Brazil", coords: [-51, -14] },
  { iso: "GBR", name: "United Kingdom", geoName: "United Kingdom", coords: [-3, 54] },
  { iso: "FRA", name: "France", geoName: "France", coords: [2, 46] },
  { iso: "DEU", name: "Germany", geoName: "Germany", coords: [10, 51] },
  { iso: "RUS", name: "Russia", geoName: "Russia", coords: [100, 60] },
  { iso: "CHN", name: "China", geoName: "China", coords: [104, 35] },
  { iso: "IND", name: "India", geoName: "India", coords: [78, 20] },
  { iso: "AUS", name: "Australia", geoName: "Australia", coords: [133, -27] },
  { iso: "JPN", name: "Japan", geoName: "Japan", coords: [138, 36] },
  { iso: "EGY", name: "Egypt", geoName: "Egypt", coords: [30, 26] },
  { iso: "ZAF", name: "South Africa", geoName: "South Africa", coords: [24, -29] },
  { iso: "MEX", name: "Mexico", geoName: "Mexico", coords: [-102, 23] },
  { iso: "ARG", name: "Argentina", geoName: "Argentina", coords: [-64, -34] },
  { iso: "NGA", name: "Nigeria", geoName: "Nigeria", coords: [8, 9] },
  { iso: "SAU", name: "Saudi Arabia", geoName: "Saudi Arabia", coords: [45, 24] },
  { iso: "IDN", name: "Indonesia", geoName: "Indonesia", coords: [113, -2] },
  { iso: "KEN", name: "Kenya", geoName: "Kenya", coords: [37, 0] },
];

const highlightedGeoNames = countryMarkers.map(m => m.geoName);

export default function WorldMap() {
  const router = useRouter();

  const handleCountryClick = (countryName: string, iso: string) => {
    console.log(`Clicked on ${countryName} (${iso})`); // Debug log
    
    // Play click sound
    const clickSound = new Audio('/sound/click.mp3');
    clickSound.volume = 0.5;
    clickSound.play().catch(err => console.log('Click sound failed:', err));
    
    // Navigate to the mage page with country info
    router.push(`/mage?country=${encodeURIComponent(countryName)}&iso=${iso}`);
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* 3D Smoke Background */}
      <SmokeBackground />

      {/* Spooky background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-orange-950/30 z-10" />
      
      {/* Spooky vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(139,0,0,0.4)] z-20" />

      {/* Darker Oval Shadow Frame around Map */}
      <div className="absolute inset-0 z-25" style={{
        background: `radial-gradient(ellipse 65% 55% at center center, 
          transparent 0%, 
          transparent 30%, 
          rgba(0,0,0,0.5) 50%, 
          rgba(0,0,0,0.8) 70%, 
          rgba(0,0,0,0.95) 100%)`
      }} />

      {/* Home Moon - Top Left */}
      <div className="absolute top-8 left-8 z-28">
        <Image
          src="/assets/spooky/home-moon.png"
          alt="Spooky Moon"
          width={220}
          height={220}
          className="object-contain"
          priority
        />
      </div>

      {/* Bats over Moon - Top Left */}
      <div className="absolute top-8 left-8 z-29">
        <Image
          src="/assets/spooky/bats.png"
          alt="Bats"
          width={220}
          height={220}
          className="object-contain"
          priority
        />
      </div>

      {/* Top Bar for Text */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent z-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-400 font-serif tracking-wider drop-shadow-lg paint-font">
          SÉANCE
        </h1>
      </div>

      {/* Bottom Bar for Text */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/90 to-transparent z-40 flex items-center justify-center">
        {/* Render the bottom text directly on the bar (no rounded box or backdrop) */}
        <p className="text-xl text-orange-400 font-serif tracking-wide font-medium paint-font px-6 py-3"
           style={{
             textShadow: '0 0 20px rgba(255, 165, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.4)',
             filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.6))'
           }}>
          Unlock dark folklore this kiroween
        </p>
      </div>

      {/* Floating Spooky Elements */}
      <div className="absolute inset-0 z-30">
        <SpookyElements />
      </div>

      {/* Map container */}
      <div className="relative w-full h-full flex items-center justify-center z-35">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 147
          }}
          width={800}
          height={600}
          className="w-full h-full"
        >
          <defs>
            {/* Solid dark fill for regular countries */}
            <pattern id="grunge" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="#1a1a1a" />
            </pattern>
            
            {/* Solid lighter fill for highlighted countries */}
            <pattern id="highlight" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="#2a2a2a" />
            </pattern>
            
            {/* Solid blood color for hover */}
            <pattern id="blood" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="#8B0000" />
            </pattern>

            {/* Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const geoName = geo.properties?.name || 'Unknown';
                const isHighlighted = highlightedGeoNames.includes(geoName);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "url(#highlight)" : "url(#grunge)"}
                    stroke="#8B4513"
                    strokeWidth={0.5}
                    className={isHighlighted ? "cursor-pointer" : "cursor-default"}
                    style={{
                      default: { 
                        outline: "none",
                        transition: "all 0.3s ease"
                      },
                      hover: { 
                        fill: "transparent", // Always transparent on hover like before
                        outline: "none",
                        filter: "url(#glow)",
                        stroke: "#FF4500",
                        strokeWidth: 2
                      },
                      pressed: { outline: "none" }
                    }}
                    onClick={(event) => {
                      console.log(`Geography clicked: ${geoName}, isHighlighted: ${isHighlighted}`); // Debug
                      if (isHighlighted) {
                        const country = countryMarkers.find(c => c.geoName === geoName);
                        if (country) {
                          console.log(`Found country: ${country.name}`); // Debug
                          handleCountryClick(country.name, country.iso);
                        } else {
                          console.log(`Country not found for geoName: ${geoName}`); // Debug
                        }
                      } else {
                        console.log(`Country ${geoName} is not clickable`); // Debug
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Country labels with manually defined coordinates */}
          {countryMarkers.map(({ name, coords }) => (
            <Marker key={name} coordinates={coords as [number, number]}>
              <text
                textAnchor="middle"
                fill="#FF6347"
                style={{
                  fontFamily: 'Creepster, cursive, system-ui',
                  fontSize: '8px',
                  fontWeight: 'bold',
                  textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
                  pointerEvents: 'none'
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>


    </div>
  );
}