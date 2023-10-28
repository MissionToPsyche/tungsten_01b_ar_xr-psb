import fitGlToWindow from '../fit-gl-to-window.ts';
import { expect } from 'vitest';

const setSize = vi.fn();
const gl = { setSize };

describe('fitGlToWindow', () => {
  it('should set the WebGL render size to the window size', () => {
    fitGlToWindow({ gl } as never);

    expect(setSize).toHaveBeenCalledWith(window.innerWidth, window.innerHeight);
  });
});
