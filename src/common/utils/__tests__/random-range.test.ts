import { expect, vi } from 'vitest';
import randomRange from '../random-range.ts';

describe('randomRange', () => {
  it('should return a random number between the given range', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.5);

    const actual = randomRange(0, 10);

    expect(actual).toEqual(5);
  });
});
