import filledVector from '../filled-vector.ts';
import { expect } from 'vitest';

describe('filledVector', () => {
  it('should create a vector with all the same elements', () => {
    const actual = filledVector(1);

    expect(actual).toEqual([1, 1, 1]);
  });
});
