/**
 * Global Audio Manager
 * Handles audio unlocking and playback across the entire app
 */

class AudioManager {
  private static instance: AudioManager;
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private unlocked = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initUnlock();
    }
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private initUnlock() {
    const unlockAudio = () => {
      if (!this.unlocked) {
        // Create a silent audio to unlock the audio context
        const silentAudio = new Audio();
        silentAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA4T/////////////////////////////////////////////////';
        silentAudio.play().then(() => {
          this.unlocked = true;
          silentAudio.pause();
        }).catch(() => {});

        // Remove listeners after unlock
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('touchstart', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
        document.removeEventListener('mousemove', unlockAudio);
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
    // Also unlock on mouse move (for map hover)
    document.addEventListener('mousemove', unlockAudio, { once: true });
  }

  /**
   * Preload an audio file
   */
  preload(soundPath: string, volume = 0.5): HTMLAudioElement {
    if (this.audioCache.has(soundPath)) {
      return this.audioCache.get(soundPath)!;
    }

    const audio = new Audio(soundPath);
    audio.volume = volume;
    audio.preload = 'auto';
    this.audioCache.set(soundPath, audio);
    return audio;
  }

  /**
   * Play a sound effect
   */
  play(soundPath: string, volume = 0.5): Promise<void> {
    return new Promise((resolve, reject) => {
      let audio = this.audioCache.get(soundPath);
      
      if (!audio) {
        audio = this.preload(soundPath, volume);
      }

      audio.currentTime = 0;
      audio.volume = volume;
      
      audio.play()
        .then(() => resolve())
        .catch((err) => {
          console.log(`Audio play failed for ${soundPath}:`, err);
          reject(err);
        });
    });
  }

  /**
   * Check if audio is unlocked
   */
  isUnlocked(): boolean {
    return this.unlocked;
  }

  /**
   * Manually unlock audio (useful for testing)
   */
  unlock() {
    this.unlocked = true;
  }
}

// Export singleton instance
export const audioManager = AudioManager.getInstance();
