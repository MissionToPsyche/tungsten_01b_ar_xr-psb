import { Camera, Euler, Matrix4, Vector3 } from 'three';

/**
 * Returns an Euler looking at the `camera` based on the provided `position`
 * respective of the `upAxis`. Does not mutate the original values.
 * @param position The position to look from
 * @param upAxis The up axis of the object
 * @param camera The camera to look to
 */
const lookAtCamera = (
  position: Vector3,
  upAxis: Vector3,
  camera: Camera
): Euler => {
  camera.updateMatrixWorld();
  const eyePosition = position
    .clone()
    .setFromMatrixPosition(camera.matrixWorld);

  const lookAtMatrix = new Matrix4();
  lookAtMatrix.lookAt(eyePosition, camera.position, upAxis);
  return new Euler().setFromRotationMatrix(lookAtMatrix);
};

export default lookAtCamera;
