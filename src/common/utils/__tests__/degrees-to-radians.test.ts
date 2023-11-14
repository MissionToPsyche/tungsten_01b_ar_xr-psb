import { expect } from 'vitest';
import degreesToRadians from '../degrees-to-radians.ts';

describe('degreesToRadians', () => {
  it('should convert degrees to radians', () => {
    expect(degreesToRadians(90)).toEqual(Math.PI / 2);
  });
});
