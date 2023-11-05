import { vi } from 'vitest';

const setProgress = vi.fn();

const useLoader = vi.fn(() => ({
  progress: 50,
  setProgress
}));

export default useLoader;
