import { Vector3 } from 'three';
import lerpWithMaxDelta from '../lerp-with-max-delta.ts';

describe('lerpWithMaxDelta', () => {
  it('should lerp if the delta is less than the max delta', () => {
    const from = new Vector3(0, 0, 0);
    const to = new Vector3(0, 10, 0);

    lerpWithMaxDelta(from, to, 0.1, 11);

    expect(from.y).toEqual(1);
  });

  it('should lerp if the delta is equal to the max delta', () => {
    const from = new Vector3(0, 0, 0);
    const to = new Vector3(0, 10, 0);

    lerpWithMaxDelta(from, to, 0.1, 10);

    expect(from.y).toEqual(1);
  });

  it('should not lerp if the delta greater than the max delta', () => {
    const from = new Vector3(0, 0, 0);
    const to = new Vector3(0, 10, 0);

    lerpWithMaxDelta(from, to, 0.1, 5);

    expect(from.y).toEqual(0);
  });
});
