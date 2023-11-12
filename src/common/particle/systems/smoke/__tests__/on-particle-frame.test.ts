import { Particle } from '../../../particle.ts';
import { Euler, Vector3 } from 'three';
import onParticleFrame from '../on-particle-frame.ts';
import { RootState } from '@react-three/fiber';
import transformOnLocalAxis from '../../../../utils/transform-on-local-axis.ts';
import { expect, vi } from 'vitest';
import lookAtCamera from '../../../../utils/look-at-camera.ts';
import onParticleInit from '../on-particle-init.ts';

vi.mock('../../../../utils/transform-on-local-axis.ts');
vi.mock('../../../../utils/look-at-camera.ts');
vi.mock('../on-particle-init.ts');

let particle: Particle;

const systemState = {
  time: 0
};

const rootState: RootState = {
  camera: {
    updateMatrixWorld: vi.fn()
  }
} as unknown as never;

describe('onParticleFrame', () => {
  beforeEach(() => {
    particle = {
      position: new Vector3(0, 0, 0),
      meshScale: new Vector3(9, 9, 9),
      rotation: new Euler(2, 2, 2),
      speed: 3,
      meshRotation: new Euler(4, 4, 4),
      timeAlive: 5
    };

    vi.mocked(transformOnLocalAxis).mockReturnValue(new Vector3(1, 1, 1));
    vi.mocked(lookAtCamera).mockReturnValue(new Euler(1, 1, 1));
  });

  it('should translate the particle forward along its axis', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(particle.position).toEqual(new Vector3(1, 1, 1));
    expect(transformOnLocalAxis).toHaveBeenCalledWith(
      particle.position,
      particle.rotation,
      new Vector3(1, 0, 0),
      particle.speed
    );
  });

  it('should rotate the mesh to look at the camera', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(particle.meshRotation).toEqual(new Euler(1, 1, 1));
  });

  it('should reduce the scale of the particle', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(particle.meshScale).toEqual(new Vector3(6, 6, 6));
  });

  it('should reset the particle if it gets too small', () => {
    vi.mocked(onParticleInit).mockReturnValueOnce(particle);

    onParticleFrame(particle, systemState, rootState);
    onParticleFrame(particle, systemState, rootState);
    onParticleFrame(particle, systemState, rootState);
    onParticleFrame(particle, systemState, rootState);

    expect(onParticleInit).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
