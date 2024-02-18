import { useContext } from 'react';
import AudioContext, { AudioContextType } from './audio-context';

/**
 * Hook to retrieve the AudioContext
 */
const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);

  if (!context) {
    throw Error('Audio cannot be used outside of <AudioProvider>');
  }

  return context;
};

export default useAudio;
