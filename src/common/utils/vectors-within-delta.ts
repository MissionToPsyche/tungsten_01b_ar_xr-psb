import { Vector3 } from 'three';

const vectorsWithinDelta = (v1: Vector3, v2: Vector3, delta: number) => {
  const difference = v1.sub(v2);
  return (
    Math.abs(difference.x) <= delta &&
    Math.abs(difference.y) <= delta &&
    Math.abs(difference.z) <= delta
  );
};

export default vectorsWithinDelta;
