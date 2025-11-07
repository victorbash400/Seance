"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import SmokeBackground from "../components/SmokeBackground";

function MageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const country = searchParams.get("country") || "Unknown Land";

  const journeyPaths = [
    {
      title: "People's Tales",
      color: "from-blue-900 to-indigo-950",
      glowColor: "rgba(96, 165, 250, 0.6)",
    },
    {
      title: "Crown's Secrets",
      color: "from-purple-900 to-black",
      glowColor: "rgba(192, 132, 252, 0.6)",
    },
    {
      title: "Merchant's Ledger",
      color: "from-amber-800 to-amber-950",
      glowColor: "rgba(250, 204, 21, 0.5)",
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden text-white">
      {/* 3D Smoke Background */}
      <SmokeBackground />

      {/* Pumpkin Pile Background */}
      <div
        className="absolute inset-0 z-5 opacity-40"
        style={{
          backgroundImage: "url(/assets/spooky/pumpkin_pile.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark mist overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Back button */}
      <button
        onClick={() => {
          const clickSound = new Audio("/sound/click.mp3");
          clickSound.volume = 0.5;
          clickSound
            .play()
            .catch((err) => console.log("Click sound failed:", err));
          router.push("/");
        }}
        className="absolute top-6 left-6 z-50 px-4 py-2 rounded-md bg-gradient-to-r from-red-700 to-black border border-red-800 text-red-200 font-serif hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        style={{
          textShadow: "0 0 10px rgba(255, 50, 50, 0.8)",
        }}
      >
        ← Return to the Realm
      </button>

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-between h-full px-8 py-8">
        {/* Top section with title and greeting */}
        <div className="text-center">
          <h1
            className="text-5xl font-bold text-orange-500 font-serif mb-4"
            style={{
              textShadow: "0 0 25px rgba(255,140,0,0.9)",
            }}
          >
            The Halloween Chronicler
          </h1>
          <p className="text-lg text-gray-300 italic font-serif mb-8">
            Keeper of {country}'s Darkened Legends
          </p>

          <div className="bg-gradient-to-br from-black/60 via-zinc-900/50 to-black/60 px-12 py-8 rounded-lg border border-orange-700/20 shadow-[0_0_20px_rgba(255,165,0,0.3)] backdrop-blur-md max-w-4xl mx-auto">
            <p className="text-lg text-gray-200 font-serif text-center leading-relaxed">
              "Ah... another mortal seeking truth from the ashes of time,
              <br />
              Where shadows dance and ancient secrets chime.
              <br />
              Dare you pry into{" "}
              <span className="text-orange-400 font-bold">{country}</span>'s
              haunted past,
              <br />
              Where echoes of the dead forever last?
              <br />
              Three paths before you now unfold,
              <br />
              Each holding tales both dark and old.
              <br />
              Choose your journey... if you dare,
              <br />
              But know that spirits linger there."
            </p>
          </div>
        </div>

        {/* Bottom section with journey buttons */}
        <div className="text-center">
          <div className="flex justify-center gap-8 max-w-4xl mx-auto mb-4">
            {journeyPaths.map((path, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-orange-500/50 backdrop-blur-sm bg-black/60`}
                style={{
                  boxShadow: `0 0 15px ${path.glowColor}`,
                }}
                onClick={() => {
                  const clickSound = new Audio("/sound/click.mp3");
                  clickSound.volume = 0.5;
                  clickSound
                    .play()
                    .catch((err) => console.log("Click sound failed:", err));
                  router.push(
                    `/book?country=${encodeURIComponent(country)}&path=${encodeURIComponent(path.title)}`,
                  );
                }}
              >
                <span className="text-orange-300 font-serif font-medium text-lg">
                  {path.title}
                </span>
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 font-serif italic">
            "The hour grows late... choose before the veil closes."
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MagePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <div className="text-orange-400 text-2xl font-serif animate-pulse">
            Summoning the spirits...
          </div>
        </div>
      }
    >
      <MageContent />
    </Suspense>
  );
}
