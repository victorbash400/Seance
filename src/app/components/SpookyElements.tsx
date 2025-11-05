"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingPumpkinProps {
  size: number;
  startX: number;
  delay: number;
  duration: number;
}

const FloatingPumpkin = ({ size, startX, delay, duration }: FloatingPumpkinProps) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: `${startX}%`,
      bottom: "0px",
      animation: `pumpkinRise ${duration}s linear ${delay}s infinite`,
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}
  >
    <Image
      src="/assets/spooky/home-pumpkin.png"
      alt="Rising Pumpkin"
      width={size}
      height={size}
      className="drop-shadow-lg"
      style={{
        filter: "drop-shadow(0 0 15px rgba(255, 100, 0, 0.6))",
      }}
    />
  </div>
);

export default function SpookyElements() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  const basePumpkins = [
    { size: 120, startX: 15, delay: 0, duration: 12 },
    { size: 80, startX: 75, delay: 2, duration: 15 },
    { size: 150, startX: 35, delay: 4, duration: 18 },
    { size: 60, startX: 85, delay: 6, duration: 10 },
    { size: 100, startX: 5, delay: 8, duration: 14 },
    { size: 70, startX: 95, delay: 10, duration: 11 },
    { size: 180, startX: 55, delay: 12, duration: 20 },
    { size: 90, startX: 25, delay: 14, duration: 13 },
  ];

  // Duplicate pumpkins with staggered offset so new ones start while others rise
  const pumpkins = basePumpkins.flatMap((p) => [
    p,
    { ...p, delay: p.delay + p.duration / 2 },
  ]);

  return (
    <>
      {pumpkins.map((pumpkin, index) => (
        <FloatingPumpkin
          key={`pumpkin-${index}`}
          size={pumpkin.size}
          startX={pumpkin.startX}
          delay={pumpkin.delay}
          duration={pumpkin.duration}
        />
      ))}

      <style jsx>{`
        @keyframes pumpkinRise {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-25vh) rotate(10deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) rotate(-5deg) scale(1.1);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-75vh) rotate(15deg) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(0deg) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
