import { PropsWithChildren, useState } from 'react';
import AudioContext from './audio-context';
import { useAudioPlayer } from 'react-use-audio-player';
/**
 * Audio provider that wraps the useAudioPlayer hook (https://github.com/E-Kuerschner/useAudioPlayer)
 */
export const AudioProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { load, play, stop, pause, playing } = useAudioPlayer();
  const [enabled, setEnabled] = useState(false);

  /**
   * Loads audio for playback
   * @param src The path to the audio file
   * @param autoPlay Auto-play flag
   * @param onPlay Callback at start of audio playback
   * @param onStop Callback at end of audio playback
   */
  const loadAudio = (
    src: string,
    autoPlay?: boolean,
    onPlay?: () => void,
    onStop?: () => void
  ) => {
    load(src, {
      autoplay: enabled ? autoPlay : false,
      onplay: onPlay,
      onstop: onStop
    });
  };

  /**
   * Plays the loaded audio file if audio is enabled
   */
  const playAudio = () => {
    if (enabled) {
      play();
    }
  };

  /**
   * Pauses playback.
   */
  const pauseAudio = () => {
    pause();
  };

  /**
   * Stops playback.
   */
  const stopAudio = () => {
    stop();
  };

  /**
   * Indicates if audio is currently playing
   * @returns The playback status
   */
  const isPlaying = () => {
    return playing;
  };
  return (
    <AudioContext.Provider
      value={{
        loadAudio,
        playAudio,
        pauseAudio,
        stopAudio,
        isPlaying,
        setEnabled
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
