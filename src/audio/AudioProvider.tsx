import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react';
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
  const loadAudio = useCallback(
    (
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
    },
    [load, enabled]
  );

  /**
   * Plays the loaded audio file if audio is enabled
   */
  const playAudio = useCallback(() => {
    if (enabled) {
      play();
    }
  }, [enabled, play]);

  /**
   * Indicates if audio is currently playing
   * @returns The playback status
   */
  const isPlaying = useCallback(() => {
    return playing;
  }, [playing]);

  const value = useMemo(
    () => ({
      loadAudio,
      playAudio,
      pauseAudio: pause,
      stopAudio: stop,
      isPlaying,
      setEnabled,
      enabled
    }),
    [loadAudio, playAudio, pause, stop, isPlaying, setEnabled, enabled]
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
