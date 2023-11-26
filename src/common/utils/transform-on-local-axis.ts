import { Euler, Quaternion, Vector3 } from 'three';

/**
 * Returns a new {@link Vector3} displaced along the `forwardAxis` by the
 * `displaceAmount` respective of the `rotation`.
 * @param position The current position, will be mutated
 * @param rotation The current rotation
 * @param forwardAxis The axis to transform along
 * @param displaceAmount The amount to transform
 */
const transformOnLocalAxis = (
  position: Vector3,
  rotation: Euler,
  forwardAxis: Vector3,
  displaceAmount: number
) => {
  const quaternion = new Quaternion().setFromEuler(rotation);
  const displacement = forwardAxis
    .clone()
    .applyQuaternion(quaternion)
    .multiplyScalar(displaceAmount);
  position.add(displacement);
};

export default transformOnLocalAxis;
