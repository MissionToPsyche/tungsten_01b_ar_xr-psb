import ReactThreeTestRenderer from '@react-three/test-renderer';
import ModelSpinner from '../ModelSpinner.tsx';
import { Sphere } from '@react-three/drei';
import { expect } from 'vitest';

const setup = (speed: number) =>
  ReactThreeTestRenderer.create(
    <ModelSpinner speed={speed}>
      <Sphere name="child" />
    </ModelSpinner>
  );

describe('<ModelSpinner/>', () => {
  it('should render the provided children', async () => {
    const renderer = await setup(1);

    expect(renderer.scene.children[0].children[0].instance.name).toEqual(
      'child'
    );
  });

  it('should rotate by the given speed times delta each frame', async () => {
    const speed = 10;
    const delta = 10;

    const renderer = await setup(speed);

    expect(renderer.scene.children[0].instance.rotation.y).toEqual(0);

    await renderer.advanceFrames(1, delta);

    expect(renderer.scene.children[0].instance.rotation.y).toEqual(
      speed * delta
    );
  });
});
