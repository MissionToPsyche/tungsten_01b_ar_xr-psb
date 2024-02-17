import { useContext } from 'react';
import AudioContext from './audio-context';

/**
 * Hook to retrieve the AudioContext
 */
function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw Error('Audio cannot be used outside of <AudioProvider>');
  }
  return context;
}

export default useAudio;
