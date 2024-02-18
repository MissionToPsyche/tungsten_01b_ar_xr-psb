import { AudioContextType } from '../audio-context.ts';

const value: AudioContextType = {
  isPlaying: vi.fn(() => false),
  loadAudio: vi.fn(),
  pauseAudio: vi.fn(),
  playAudio: vi.fn(),
  stopAudio: vi.fn()
};

const useAudio = vi.fn(() => value);

export default useAudio;
