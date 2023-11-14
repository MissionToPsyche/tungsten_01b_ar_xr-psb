import { expect } from 'vitest';
import upVector from '../up-vector.ts';
import { Vector3 } from 'three';

describe('upVector', () => {
  it('should return a new up vector', () => {
    expect(upVector()).toEqual(new Vector3(0, 1, 0));
  });
});
