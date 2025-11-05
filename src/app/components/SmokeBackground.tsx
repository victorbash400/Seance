"use client";

import { SmokeScene } from "react-smoke";
import { useMemo, useState, useEffect } from "react";
import * as THREE from "three";

export default function SmokeBackground() {
  const [mountKey, setMountKey] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Thick white smoke
  const smokeColor = useMemo(() => new THREE.Color("#ffffff"), []);
  const bgColor = useMemo(() => new THREE.Color("#000000"), []);

  // Ensure we're on client side and WebGL is available
  useEffect(() => {
    // Check if we're on client and WebGL is supported
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (gl) {
        setIsClient(true);
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          setMountKey(prev => prev + 1);
        }, 100);
      } else {
        console.warn('WebGL not supported, smoke effect disabled');
        setHasError(true);
      }
    }
  }, []);

  // Fallback if WebGL not supported or error occurred
  if (!isClient || hasError) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/20 via-gray-800/10 to-gray-900/20" />
    );
  }

  try {
    return (
      <div className="absolute inset-0 z-0">
        <SmokeScene
          key={mountKey}
          camera={{ fov: 60, position: [0, 0, 500], far: 6000 }}
          scene={{ background: bgColor }}
          smoke={{
            color: smokeColor,
            density: 40, // Lower density for patches instead of filling
            enableRotation: true,
            rotation: [0, 0, 0.03], // Slower rotation
            enableWind: true,
            windStrength: [0.008, 0.006, 0.004], // Gentler wind
            windDirection: [1, 0.2, 0.1],
            opacity: 0.7, // Slightly more opaque for thickness
            size: [1000, 1000, 1000], // Larger particles for thicker wisps
            enableTurbulence: true,
            turbulenceStrength: [0.02, 0.02, 0.015], // More turbulence for wispy effect
            maxVelocity: [25, 25, 15], // Slower movement
            minBounds: [-800, -800, -800], // Larger bounds
            maxBounds: [800, 800, 800],
            velocityResetFactor: 12 // Slower reset for longer wisps
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    );
  } catch (error) {
    console.error('Smoke effect error:', error);
    setHasError(true);
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/20 via-gray-800/10 to-gray-900/20" />
    );
  }
}