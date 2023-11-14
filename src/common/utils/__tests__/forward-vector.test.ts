import { expect } from 'vitest';
import forwardVector from '../forward-vector.ts';
import { Vector3 } from 'three';

describe('forwardVector', () => {
  it('should return a forward vector', () => {
    expect(forwardVector()).toEqual(new Vector3(0, 0, 1));
  });
});
