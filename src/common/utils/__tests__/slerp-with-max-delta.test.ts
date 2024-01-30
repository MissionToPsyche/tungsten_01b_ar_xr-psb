import { Quaternion } from 'three';
import slerpWithMaxDelta from '../slerp-with-max-delta.ts';

describe('slerpWithMaxDelta', () => {
  it('should slerp if the delta is less than max delta', () => {
    const from = new Quaternion(0, 0, 0, 0);
    const to = new Quaternion(0, 10, 0, 0);

    slerpWithMaxDelta(from, to, 0.1, 11);

    expect(from.y).toBeCloseTo(1.5, 0);
  });

  it('should slerp if the delta is equal to the max delta', () => {
    const from = new Quaternion(0, 0, 0, 0);
    const to = new Quaternion(0, 10, 0, 0);

    slerpWithMaxDelta(from, to, 0.1, 10);

    expect(from.y).toBeCloseTo(1.5, 0);
  });

  it('should not slerp if the delta is greater than the max delta', () => {
    const from = new Quaternion(0, 0, 0, 0);
    const to = new Quaternion(0, 10, 0, 0);

    slerpWithMaxDelta(from, to, 0.1, 1);

    expect(from.y).toEqual(0);
  });
});
