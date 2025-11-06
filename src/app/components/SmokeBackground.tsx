"use client";

import { useMemo, useState, useEffect } from "react";

interface SmokeBackgroundProps {
  variant?: "smoke" | "desk"; // smoke = animated smoky background; desk = static desk image
}

export default function SmokeBackground({ variant = "smoke" }: SmokeBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
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
          const Comp = (mod && (mod.SmokeScene || mod.default)) || null;
          if (mounted && Comp) setSmokeComp(() => Comp);
        })
        .catch((err) => {
          console.warn("react-smoke import failed, falling back to CSS smoke:", err);
        });
    }
    return () => {
      mounted = false;
    };
  }, [variant, isClient, hasWebGL]);

  if (isClient && hasWebGL && SmokeComp) {
    return (
      <div className="absolute inset-0 z-0">
        <SmokeComp />
      </div>
    );
  }

  // Fallback CSS smoke: animated translucent gradients to mimic a smoky atmosphere.
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.03), transparent 20%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.02), transparent 25%)",
          mixBlendMode: "screen",
          filter: "blur(14px)",
          opacity: 0.9,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,6,9,0.55), rgba(8,8,10,0.6))",
          opacity: 0.65,
        }}
      />
      <style>{`
        @keyframes smokeShift {
          0% { transform: translateX(-5%); opacity: 0.85 }
          50% { transform: translateX(5%); opacity: 0.95 }
          100% { transform: translateX(-5%); opacity: 0.85 }
        }
        .css-smoke-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.02), transparent 25%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.03), transparent 30%);
          filter: blur(28px) saturate(0.9);
          animation: smokeShift 18s ease-in-out infinite;
          opacity: 0.9;
          mix-blend-mode: screen;
        }
      `}</style>
      <div className="css-smoke-layer" />
    </div>
  );
}