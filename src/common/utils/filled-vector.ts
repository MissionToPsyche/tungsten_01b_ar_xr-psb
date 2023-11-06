import { Vector3 } from '@react-three/fiber';

/**
 * Creates a Vector3 filled with all the same value
 * @param value The value to fill the vector with
 */
const filledVector = (value: number): Vector3 =>
  new Array(3).fill(value) as Vector3;

export default filledVector;
