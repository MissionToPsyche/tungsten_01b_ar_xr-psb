import { createContext } from 'react';

/**
 * Context type for audio
 */
export interface AudioContextType {
  /**
   * Loads an audio file for playback
   * @param src The path to the audio file
   * @param autoPlay Auto-play upon load
   * @param onPlay Callback when playback starts
   * @param onStop Callback when audio ends
   */
  loadAudio: (
    src: string,
    autoPlay?: boolean,
    onPlay?: () => void,
    onStop?: () => void
  ) => void;
  /**
   * Plays the currently loaded audio, if any
   */
  playAudio: () => void;
  /**
   * Stops playback
   * @param name The animation name to start
   */
  stopAudio: () => void;
  /**
   * Stops the specified animation
   * @param name The animation name to stop
   */
  pauseAudio: () => void;
  /**
   * Indicates whether audio is currently playing
   */
  isPlaying: () => boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export default AudioContext;
