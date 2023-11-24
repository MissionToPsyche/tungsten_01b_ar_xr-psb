import lookAtCamera from '../look-at-camera.ts';
import { Euler, PerspectiveCamera, Vector3 } from 'three';
import { expect } from 'vitest';
import degreesToRadians from '../degrees-to-radians.ts';

describe('lookAtCamera', () => {
  it('should rotate the object to look at the camera relative to the upAxis', () => {
    const rotation = new Euler(1, 1, 1);
    const position = new Vector3(0, 0, 0);
    const upAxis = new Vector3(0, 1, 0);
    const camera = new PerspectiveCamera();
    camera.translateY(-10);

    lookAtCamera(rotation, position, upAxis, camera);

    expect(Math.abs(degreesToRadians(-90) - rotation.x)).toBeLessThan(2);
    expect(rotation.y).toEqual(0);
    expect(rotation.z).toEqual(-0);
  });

  it('should not mutate the provided values other than the rotation', () => {
    const rotation = new Euler(1, 1, 1);
    const originalPosition = new Vector3(0, 0, 0);
    const originalUpAxis = new Vector3(0, 1, 0);
    const camera = new PerspectiveCamera();
    camera.translateY(-10);
    const originalCameraPosition = camera.position.clone();

    const position = originalPosition.clone();
    const upAxis = originalUpAxis.clone();

    lookAtCamera(rotation, position, upAxis, camera);

    expect(position).toEqual(originalPosition);
    expect(upAxis).toEqual(originalUpAxis);
    expect(camera.position).toEqual(originalCameraPosition);
  });
});
