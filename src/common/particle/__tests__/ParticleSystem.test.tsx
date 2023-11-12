import ReactThreeTestRenderer from '@react-three/test-renderer';
import ParticleSystem, {
  OnParticleFrameFn,
  OnParticleInitFn
} from '../ParticleSystem.tsx';
import { Euler, Vector3 } from 'three';
import upVector from '../../utils/up-vector.ts';
import { expect, vi } from 'vitest';

const onParticleInit: OnParticleInitFn = vi.fn(() => ({
  position: new Vector3(0, 0, 0),
  meshRotation: new Euler(1, 1, 1),
  speed: 2,
  meshScale: new Vector3(3, 3, 3),
  rotation: new Euler(4, 4, 4),
  timeAlive: 0
}));

const onParticleFrame: OnParticleFrameFn = vi.fn((particle) => {
  particle.position.add(upVector());
});

const setup = () =>
  ReactThreeTestRenderer.create(
    <ParticleSystem
      count={2}
      onParticleInit={onParticleInit}
      onParticleFrame={onParticleFrame}
    >
      <sphereGeometry />
      <meshBasicMaterial />
    </ParticleSystem>
  );

describe('<ParticleSystem/>', () => {
  it('should render the instance mesh', async () => {
    const renderer = await setup();

    expect(renderer.scene.children[0].type).toEqual('Mesh');
  });

  it('should call the init function on start for particle', async () => {
    await setup();

    expect(onParticleInit).toHaveBeenCalledTimes(2);
  });

  it('should call the frame function when the frame advances for each particle', async () => {
    const renderer = await setup();

    expect(onParticleFrame).toHaveBeenCalledTimes(0);

    await renderer.advanceFrames(2, 10);

    expect(onParticleFrame).toHaveBeenCalledTimes(4);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
