import { Euler, Quaternion, Vector3 } from 'three';

/**
 * Returns a new {@link Vector3} displaced along the `forwardAxis` by the
 * `displaceAmount` respective of the `rotation`. Does not mutate any of the
 * original values.
 * @param position The current position
 * @param rotation The current rotation
 * @param forwardAxis The axis to transform along
 * @param displaceAmount The amount to transform
 */
const transformOnLocalAxis = (
  position: Vector3,
  rotation: Euler,
  forwardAxis: Vector3,
  displaceAmount: number
): Vector3 => {
  const quaternion = new Quaternion().setFromEuler(rotation);
  const displacement = forwardAxis
    .clone()
    .applyQuaternion(quaternion)
    .multiplyScalar(displaceAmount);
  return position.clone().add(displacement);
};

export default transformOnLocalAxis;
