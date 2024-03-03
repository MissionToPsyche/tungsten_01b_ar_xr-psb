import { renderHook } from '@testing-library/react';
import useSyncArToWindowSize from '../use-sync-ar-to-window-size.ts';
import { useThree } from '@react-three/fiber';
import { expect, vi } from 'vitest';
import syncArToWindowSize from '../../utils/sync-ar-to-window-size.ts';

vi.mock('@react-three/fiber');
vi.mock('../../utils/sync-ar-to-window-size.ts');

type ObserverCallback = (
  mutations: { type: string; attributeName?: string }[]
) => void;

let callbackTrigger: ObserverCallback;

const mutationObserverMock = vi.fn((callback: ObserverCallback) => {
  return {
    observe: vi.fn(() => {
      callbackTrigger = callback;
    }),
    disconnect: vi.fn()
  };
});

const videoMock = {} as HTMLVideoElement;

vi.stubGlobal('MutationObserver', mutationObserverMock);
vi.spyOn(document, 'getElementById').mockReturnValue(videoMock);

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
    callbackTrigger([{ type: 'childList' }]);
    callbackTrigger([{ type: 'attributes', attributeName: 'style' }]);

    expect(syncArToWindowSize).toHaveBeenCalledWith(three.gl, three.camera);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
