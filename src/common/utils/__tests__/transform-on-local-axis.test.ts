import { Euler, Vector3 } from 'three';
import transformOnLocalAxis from '../transform-on-local-axis.ts';
import forwardVector from '../forward-vector.ts';
import { expect } from 'vitest';

describe('transformOnLocalAxis', () => {
  it('should transform the vector along the provided local axis', () => {
    const position = new Vector3(0, 0, 0);
    const rotation = new Euler(0, Math.PI / 2, 0);
    const amount = 10;

    const actual = transformOnLocalAxis(
      position,
      rotation,
      forwardVector(),
      amount
    );

    expect(actual.x).toEqual(10);
    expect(actual.y).toEqual(0);
    expect(actual.z).toBeLessThan(1);
  });

  it('should not mutate any of the provided values', () => {
    const originalPosition = new Vector3(0, 0, 0);
    const originalRotation = new Euler(1, 1, 1);
    const originalForwardAxis = new Vector3(2, 2, 2);

    const position = originalPosition.clone();
    const rotation = originalRotation.clone();
    const forwardAxis = originalForwardAxis.clone();

    transformOnLocalAxis(position, rotation, forwardAxis, 1);

    expect(position).toEqual(originalPosition);
    expect(rotation).toEqual(originalRotation);
    expect(forwardAxis).toEqual(originalForwardAxis);
  });
});
