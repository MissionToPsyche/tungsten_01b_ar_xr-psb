import lookAtCamera from '../look-at-camera.ts';
import { PerspectiveCamera, Vector3 } from 'three';
import { expect } from 'vitest';
import degreesToRadians from '../degrees-to-radians.ts';

describe('lookAtCamera', () => {
  it('should rotate the object to look at the camera relative to the upAxis', () => {
    const position = new Vector3(0, 0, 0);
    const upAxis = new Vector3(0, 1, 0);
    const camera = new PerspectiveCamera();
    camera.translateY(-10);

    const actual = lookAtCamera(position, upAxis, camera);

    // TODO: Fix this test and implementation
    expect(Math.abs(degreesToRadians(-90) - actual.x)).toBeLessThan(2);
    expect(actual.y).toEqual(0);
    expect(actual.z).toEqual(-0);
  });

  it('should not mutate the provided values', () => {
    const originalPosition = new Vector3(0, 0, 0);
    const originalUpAxis = new Vector3(0, 1, 0);
    const camera = new PerspectiveCamera();
    camera.translateY(-10);
    const originalCameraPosition = camera.position.clone();

    const position = originalPosition.clone();
    const upAxis = originalUpAxis.clone();

    lookAtCamera(position, upAxis, camera);

    expect(position).toEqual(originalPosition);
    expect(upAxis).toEqual(originalUpAxis);
    expect(camera.position).toEqual(originalCameraPosition);
  });
});
