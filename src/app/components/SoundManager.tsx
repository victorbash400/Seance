"use client";

import { useEffect, useRef, useState } from "react";

interface SoundManagerProps {
  enablePageFlip?: boolean;
}

export default function SoundManager({ enablePageFlip = false }: SoundManagerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const owlTimerRef = useRef<NodeJS.Timeout | null>(null);
  const wolfTimerRef = useRef<NodeJS.Timeout | null>(null);
  const heartbeatTimerRef = useRef<NodeJS.Timeout | null>(null);
  const ambientVolumeRef = useRef(0.4);
  const isMutedRef = useRef(false);
  const volumeRef = useRef(50);

  // Keep refs in sync with state
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    // Initialize background music
    const bgMusic = new Audio('/sound/creepy_music.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    backgroundMusicRef.current = bgMusic;

    // Start playing background music
    bgMusic.play().catch(err => console.log('Background music autoplay blocked:', err));

    // Schedule random owl hoots (every 15-30 seconds)
    const scheduleOwl = () => {
      const delay = Math.random() * 15000 + 15000; // 15-30 seconds
      owlTimerRef.current = setTimeout(() => {
        if (!isMutedRef.current && volumeRef.current > 0) {
          const owl = new Audio('/sound/owl_hoot.mp3');
          owl.volume = ambientVolumeRef.current;
          owl.play().catch(err => console.log('Owl sound failed:', err));
        }
        scheduleOwl();
      }, delay);
    };

    // Schedule random wolf howls (every 20-40 seconds)
    const scheduleWolf = () => {
      const delay = Math.random() * 20000 + 20000; // 20-40 seconds
      wolfTimerRef.current = setTimeout(() => {
        if (!isMutedRef.current && volumeRef.current > 0) {
          const wolf = new Audio('/sound/wolf-howl.mp3');
          wolf.volume = ambientVolumeRef.current;
          wolf.play().catch(err => console.log('Wolf sound failed:', err));
        }
        scheduleWolf();
      }, delay);
    };

    // Schedule random heartbeats (every 30-50 seconds - less frequent)
    const scheduleHeartbeat = () => {
      const delay = Math.random() * 20000 + 30000; // 30-50 seconds
      heartbeatTimerRef.current = setTimeout(() => {
        if (!isMutedRef.current && volumeRef.current > 0) {
          const heartbeat = new Audio('/sound/heartbeat.mp3');
          heartbeat.volume = ambientVolumeRef.current * 0.7; // Slightly quieter
          heartbeat.play().catch(err => console.log('Heartbeat sound failed:', err));
        }
        scheduleHeartbeat();
      }, delay);
    };

    scheduleOwl();
    scheduleWolf();
    scheduleHeartbeat();

    // Cleanup
    return () => {
      bgMusic.pause();
      if (owlTimerRef.current) clearTimeout(owlTimerRef.current);
      if (wolfTimerRef.current) clearTimeout(wolfTimerRef.current);
      if (heartbeatTimerRef.current) clearTimeout(heartbeatTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (backgroundMusicRef.current) {
      if (isMuted) {
        backgroundMusicRef.current.pause();
      } else {
        backgroundMusicRef.current.play().catch(err => console.log('Resume music failed:', err));
      }
    }
  }, [isMuted]);

  useEffect(() => {
    // Update volume for background music
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = (volume / 100) * 0.6; // Max 60% for background
    }
    // Update ambient volume reference
    ambientVolumeRef.current = (volume / 100) * 0.8; // Max 80% for ambient sounds
  }, [volume]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div 
      className="fixed bottom-4 left-4 z-50 flex flex-col items-center gap-2"
      onMouseEnter={() => setShowVolumeSlider(true)}
      onMouseLeave={() => setShowVolumeSlider(false)}
    >
      {/* Volume Slider - Vertical */}
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          showVolumeSlider ? 'h-32 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <div className="bg-black bg-opacity-70 px-2 py-3 rounded-full flex flex-col items-center gap-2">
          <span className="text-white text-xs">{volume}%</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="h-20 w-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-orange-500"
            style={{
              writingMode: 'vertical-lr',
              direction: 'rtl',
              background: `linear-gradient(to top, #f97316 0%, #f97316 ${volume}%, #4b5563 ${volume}%, #4b5563 100%)`
            }}
          />
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all"
        aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
      >
        {isMuted || volume === 0 ? (
          // Muted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : volume < 50 ? (
          // Low volume icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m-9.95-1.05H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          // High volume icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function useSoundEffect(soundPath: string, volume: number = 0.5) {
  const [isMuted, setIsMuted] = useState(false);

  const play = () => {
    if (!isMuted) {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audio.play().catch(err => console.log('Sound effect failed:', err));
    }
  };

  return { play, isMuted, setIsMuted };
}
