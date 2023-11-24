import { Camera, Euler, Matrix4, Vector3 } from 'three';

/**
 * Returns an Euler looking at the `camera` based on the provided `position`
 * respective of the `upAxis`
 * @param rotation The rotation Euler to apply the look at rotation to. Will be mutated
 * @param position The position to look from
 * @param upAxis The up axis of the object
 * @param camera The camera to look to
 */
const lookAtCamera = (
  rotation: Euler,
  position: Vector3,
  upAxis: Vector3,
  camera: Camera
) => {
  camera.updateMatrixWorld();
  const eyePosition = position
    .clone()
    .setFromMatrixPosition(camera.matrixWorld);

  const lookAtMatrix = new Matrix4();
  lookAtMatrix.lookAt(eyePosition, camera.position, upAxis);
  rotation.setFromRotationMatrix(lookAtMatrix);
};

export default lookAtCamera;
