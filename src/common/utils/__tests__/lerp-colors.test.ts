import { Color } from 'three';
import { expect, vi } from 'vitest';
import lerpColors from '../lerp-colors.ts';

const fromColor = new Color('red');
const toColor = new Color('yellow');
const alpha = 0.5;

const color = {
  lerpColors: vi.fn()
} as unknown as Color;

describe('lerpColors', () => {
  it('should call lerpColors on the provided color with the appropriate values', () => {
    lerpColors(color, fromColor, toColor, alpha);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(color.lerpColors).toHaveBeenCalledWith(fromColor, toColor, alpha);
  });
});
