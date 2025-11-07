"use client";

import { useState, useEffect } from "react";

interface SmokeBackgroundProps {
  variant?: "smoke" | "desk"; // smoke = animated smoky background; desk = static desk image
}

export default function SmokeBackground({
  variant = "smoke",
}: SmokeBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(!!gl);
    }
  }, []);

  // If the book specifically asked for the desk background, render it immediately
  if (variant === "desk") {
    const imageUrl = "/desk_background.png";
    return (
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
        }}
      />
    );
  }

  // For the smoke variant, prefer a WebGL smoke effect when available. If WebGL is not available
  // or we're on the server, fall back to a lightweight CSS-based smoke overlay.
  const [SmokeComp, setSmokeComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    if (variant === "smoke" && isClient && hasWebGL) {
      import("react-smoke")
        .then((mod) => {
          const Comp = mod.SmokeScene;
          if (mounted && Comp) setSmokeComp(() => Comp);
        })
        .catch((err) => {
          console.warn(
            "react-smoke import failed, falling back to CSS smoke:",
            err,
          );
        });
    }
    return () => {
      mounted = false;
    };
  }, [variant, isClient, hasWebGL]);

  // Render WebGL smoke effect when available
  if (SmokeComp) {
    return (
      <div className="absolute inset-0 z-0">
        <SmokeComp
          smoke={{
            enableTurbulence: true,
            turbulenceStrength: [0.08, 0.08, 0.08],
            enableWind: true,
            windStrength: [0.06, 0.04, 0.02],
            windDirection: [1, 0.5, 0],
            density: 80,
            opacity: 0.6,
            enableRotation: true,
            rotation: [0, 0, 0.02],
            maxVelocity: [40, 40, 20],
          }}
        />
        {/* Reddish overlay for extra tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(139, 0, 0, 0.15), rgba(139, 0, 0, 0.05))",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    );
  }

  // Fallback CSS smoke: more turbulent, windy, reddish smoke effect
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Base reddish smoke layers */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 15% 20%, rgba(139,0,0,0.08), transparent 30%), radial-gradient(circle at 85% 10%, rgba(139,0,0,0.06), transparent 35%), radial-gradient(circle at 50% 80%, rgba(139,0,0,0.05), transparent 25%)",
          mixBlendMode: "screen",
          filter: "blur(20px)",
          opacity: 0.9,
        }}
      />

      {/* Turbulent wind layers */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(45deg, rgba(139,0,0,0.12), rgba(80,0,0,0.08), rgba(139,0,0,0.15))",
          opacity: 0.4,
          filter: "blur(15px)",
        }}
      />

      <style>{`
        @keyframes turbulentWind {
          0% { 
            transform: translateX(-8%) translateY(-3%) rotate(0deg); 
            opacity: 0.7;
            filter: blur(25px) hue-rotate(0deg);
          }
          25% { 
            transform: translateX(12%) translateY(5%) rotate(2deg); 
            opacity: 0.9;
            filter: blur(30px) hue-rotate(10deg);
          }
          50% { 
            transform: translateX(-5%) translateY(-8%) rotate(-1deg); 
            opacity: 0.8;
            filter: blur(35px) hue-rotate(5deg);
          }
          75% { 
            transform: translateX(15%) translateY(3%) rotate(3deg); 
            opacity: 0.95;
            filter: blur(28px) hue-rotate(-5deg);
          }
          100% { 
            transform: translateX(-8%) translateY(-3%) rotate(0deg); 
            opacity: 0.7;
            filter: blur(25px) hue-rotate(0deg);
          }
        }
        
        @keyframes windySwirl {
          0% { 
            transform: translateX(10%) translateY(5%) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
          33% { 
            transform: translateX(-15%) translateY(-8%) rotate(-5deg) scale(1.1); 
            opacity: 0.8;
          }
          66% { 
            transform: translateX(8%) translateY(10%) rotate(3deg) scale(0.9); 
            opacity: 0.9;
          }
          100% { 
            transform: translateX(10%) translateY(5%) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
        }
        
        .turbulent-smoke-layer-1 {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 25% 30%, rgba(139,0,0,0.06), transparent 40%), 
                      radial-gradient(ellipse at 75% 70%, rgba(160,0,0,0.08), transparent 45%),
                      radial-gradient(ellipse at 50% 10%, rgba(120,0,0,0.05), transparent 35%);
          filter: blur(32px) saturate(1.2);
          animation: turbulentWind 12s ease-in-out infinite;
          opacity: 0.85;
          mix-blend-mode: screen;
        }
        
        .turbulent-smoke-layer-2 {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 20%, rgba(139,0,0,0.04), transparent 35%), 
                      radial-gradient(ellipse at 20% 80%, rgba(100,0,0,0.06), transparent 40%),
                      radial-gradient(ellipse at 80% 50%, rgba(139,0,0,0.05), transparent 30%);
          filter: blur(40px) saturate(1.1);
          animation: windySwirl 16s ease-in-out infinite reverse;
          opacity: 0.75;
          mix-blend-mode: multiply;
        }
        
        .turbulent-smoke-layer-3 {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 40% 60%, rgba(139,0,0,0.03), transparent 25%), 
                      radial-gradient(ellipse at 90% 30%, rgba(139,0,0,0.04), transparent 30%);
          filter: blur(50px) saturate(0.9);
          animation: turbulentWind 20s ease-in-out infinite;
          opacity: 0.6;
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="turbulent-smoke-layer-1" />
      <div className="turbulent-smoke-layer-2" />
      <div className="turbulent-smoke-layer-3" />
    </div>
  );
}
