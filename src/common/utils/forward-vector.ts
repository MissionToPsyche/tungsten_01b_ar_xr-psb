import { Vector3 } from 'three';

/**
 * Returns a new forward vector. Shorthand for writing `new Vector3(0, 0, 1)`.
 */
const forwardVector = (): Vector3 => new Vector3(0, 0, 1);

export default forwardVector;
