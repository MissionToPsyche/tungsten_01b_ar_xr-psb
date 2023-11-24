import { renderHook } from '@testing-library/react';
import useSyncArToWindowSize from '../use-sync-ar-to-window-size.ts';
import { useThree } from '@react-three/fiber';
import { expect, vi } from 'vitest';
import syncArToWindowSize from '../../utils/sync-ar-to-window-size.ts';

vi.mock('@react-three/fiber');
vi.mock('../../utils/sync-ar-to-window-size.ts');

const three = {
  gl: vi.fn(),
  camera: vi.fn()
};

const setup = () =>
  renderHook(() => {
    useSyncArToWindowSize();
  });

describe('useSyncArToWindowSize', () => {
  it('should call syncArToWindowSize with three context', () => {
    vi.mocked(useThree).mockReturnValueOnce(three);

    setup();

    expect(syncArToWindowSize).toHaveBeenCalledWith(three.gl, three.camera);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
