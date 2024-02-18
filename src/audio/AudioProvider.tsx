import React, { PropsWithChildren, useCallback, useMemo } from 'react';
import AudioContext from './audio-context';
import { useAudioPlayer } from 'react-use-audio-player';
import useSettings from '../settings/use-settings.ts';

/**
 * Audio provider that wraps the useAudioPlayer hook (https://github.com/E-Kuerschner/useAudioPlayer)
 */
export const AudioProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { load, play, stop, pause, playing } = useAudioPlayer();
  const { audioEnabled } = useSettings();

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
        autoplay: audioEnabled ? autoPlay : false,
        onplay: onPlay,
        onstop: onStop
      });
    },
    [load, audioEnabled]
  );

  /**
   * Plays the loaded audio file if audio is enabled
   */
  const playAudio = useCallback(() => {
    if (audioEnabled) {
      play();
    }
  }, [audioEnabled, play]);

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
      isPlaying
    }),
    [loadAudio, playAudio, pause, stop, isPlaying]
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
