import ReactThreeTestRenderer from '@react-three/test-renderer';
import ARMarkerMirror from '../ARMarkerMirror.tsx';
import { RefObject } from 'react';
import { Euler, Group, Quaternion, Vector3 } from 'three';
import lerpWithMaxDelta from '../../utils/lerp-with-max-delta.ts';
import slerpWithMaxDelta from '../../utils/slerp-with-max-delta.ts';

vi.mock('../../utils/lerp-with-max-delta.ts');
vi.mock('../../utils/slerp-with-max-delta.ts');

const markerPosition = new Vector3(10, 11, 12);
const markerRotation = new Euler(13, 14, 15);
const markerRotationQuaternion = new Quaternion().setFromEuler(markerRotation);

const markerChildRef = {
  current: {
    parent: {
      position: markerPosition.clone(),
      rotation: markerRotation.clone(),
      quaternion: markerRotationQuaternion
    }
  }
} as RefObject<Group>;

const setup = (isMarkerVisible: boolean) => {
  return ReactThreeTestRenderer.create(
    <ARMarkerMirror
      markerChildRef={markerChildRef}
      isMarkerVisible={isMarkerVisible}
    >
      <group name="ar-marker-mirror-child" />
    </ARMarkerMirror>
  );
};

const getMirrorGroup = (
  renderer: Awaited<ReturnType<typeof ReactThreeTestRenderer.create>>
) => renderer.scene.findByProps({ name: 'ar-marker-mirror-child' }).parent;

describe('<ARMarkerMirror/>', () => {
  beforeEach(() => {
    markerChildRef.current?.parent?.position.copy(markerPosition);
    markerChildRef.current?.parent?.rotation.copy(markerRotation);
    markerChildRef.current?.parent?.quaternion.setFromEuler(markerRotation);
  });

  it('should not make the mirror visible if the marker has not been visible', async () => {
    const renderer = await setup(false);

    expect(getMirrorGroup(renderer)?.instance.visible).toBeFalsy();
  });

  it('should make the mirror visible if the marker has been visible', async () => {
    const renderer = await setup(true);

    expect(getMirrorGroup(renderer)?.instance.visible).toBeTruthy();
  });

  it('should keep the mirror visible even if the marker is no longer visible', async () => {
    const renderer = await setup(true);

    expect(getMirrorGroup(renderer)?.instance.visible).toBeTruthy();

    await renderer.update(
      <ARMarkerMirror markerChildRef={markerChildRef} isMarkerVisible={false}>
        <group name="ar-marker-mirror-child" />
      </ARMarkerMirror>
    );

    expect(getMirrorGroup(renderer)?.instance.visible).toBeTruthy();
  });

  it('should exactly mirror the position of the marker upon first finding it', async () => {
    const renderer = await setup(true);

    const mirrorGroup = getMirrorGroup(renderer);
    expect(mirrorGroup?.instance.position.x).toEqual(
      markerChildRef.current?.parent?.position.x
    );
    expect(mirrorGroup?.instance.position.y).toEqual(
      markerChildRef.current?.parent?.position.y
    );
    expect(mirrorGroup?.instance.position.z).toEqual(
      markerChildRef.current?.parent?.position.z
    );
    expect(mirrorGroup?.instance.rotation.x).toEqual(
      markerChildRef.current?.parent?.rotation.x
    );
    expect(mirrorGroup?.instance.rotation.y).toEqual(
      markerChildRef.current?.parent?.rotation.y
    );
    expect(mirrorGroup?.instance.rotation.z).toEqual(
      markerChildRef.current?.parent?.rotation.z
    );
  });

  it('should lerp the position and slerp the rotation towards the marker on each frame', async () => {
    const renderer = await setup(true);

    await renderer.advanceFrames(1, 1);

    const mirrorGroup = getMirrorGroup(renderer);
    expect(lerpWithMaxDelta).toHaveBeenCalledWith(
      mirrorGroup?.instance.position,
      markerChildRef.current?.parent?.position,
      0.3,
      100
    );
    expect(slerpWithMaxDelta).toHaveBeenCalledWith(
      mirrorGroup?.instance.quaternion,
      markerChildRef.current?.parent?.quaternion,
      0.2,
      1
    );
  });
});
