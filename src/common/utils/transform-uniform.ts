import { Vector3 } from 'three';

/**
 * Uniformly transform the provided vector, `vec`
 * @param vec The vector to transform
 * @param amount The amount to transform it by
 */
const transformUniform = (vec: Vector3, amount: number) => {
  vec.addScalar(amount);
};

export default transformUniform;
