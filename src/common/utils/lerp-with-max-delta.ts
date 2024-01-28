import { Vector3 } from 'three';

/**
 * Lerps the "from" vector to the "to" vector with the given alpha. Does not lerp if the delta between the two values is larger than max delta.
 * @param from The vector to lerp from (will be mutated)
 * @param to The vector to lerp to
 * @param alpha The speed at which to lerp
 * @param maxDelta The max delta before lerp stops
 */
const lerpWithMaxDelta = (
  from: Vector3,
  to: Vector3,
  alpha: number,
  maxDelta: number
) => {
  const delta = from.distanceTo(to);

  if (delta > maxDelta) {
    return;
  }

  from.lerp(to, alpha);
};

export default lerpWithMaxDelta;
