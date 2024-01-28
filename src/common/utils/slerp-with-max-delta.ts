import { Quaternion } from 'three';

/**
 * Slerps the "from" quaternion to the "to" quaternion with the given alpha. Does not slerp if the delta between the two values is larger than max delta.
 * @param from The quaternion to slerp from (will be mutated)
 * @param to The quaternion to slerp to
 * @param alpha The speed at which to slerp
 * @param maxDelta The max delta before slerp stops
 */
const slerpWithMaxDelta = (
  from: Quaternion,
  to: Quaternion,
  alpha: number,
  maxDelta: number
) => {
  const delta = from.angleTo(to);

  if (delta > maxDelta) {
    return;
  }

  from.slerp(to, alpha);
};

export default slerpWithMaxDelta;
