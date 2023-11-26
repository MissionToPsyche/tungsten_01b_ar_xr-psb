import { Particle } from '../../../particle.ts';
import { Color, Euler, Vector3 } from 'three';
import { RootState } from '@react-three/fiber';
import transformOnLocalAxis from '../../../../utils/transform-on-local-axis.ts';
import { expect, vi } from 'vitest';
import lookAtCamera from '../../../../utils/look-at-camera.ts';
import resetParticleWhenScaleLte from '../../../utils/reset-particle-when-scale-lte.ts';
import onParticleFrame from '../on-particle-frame.ts';
import onParticleInit from '../on-particle-init.ts';
import lerpColors from '../../../../utils/lerp-colors.ts';

vi.mock('../../../../utils/transform-on-local-axis.ts');
vi.mock('../../../../utils/look-at-camera.ts');
vi.mock('../on-particle-init.ts');
vi.mock('../../../utils/reset-particle-when-scale-lte.ts');
vi.mock('../../../../utils/lerp-colors.ts');

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
      timeAlive: 5,
      color: new Color()
    };
  });

  it('should translate the particle forward along its axis', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(transformOnLocalAxis).toHaveBeenCalledWith(
      particle.position,
      particle.rotation,
      new Vector3(0, -1, 0),
      particle.speed * 6
    );
  });

  it('should rotate the mesh to look at the camera', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(lookAtCamera).toHaveBeenCalledWith(
      particle.meshRotation,
      particle.position,
      new Vector3(0, 1, 0),
      rootState.camera
    );
  });

  it('should lerp the particle color', () => {
    onParticleFrame(particle, systemState, rootState);

    lerpColors(
      particle.color as unknown as Color,
      new Color('#FFDD00'),
      new Color('#FFF2BD'),
      particle.timeAlive
    );
  });

  it('should reduce the scale of the particle', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(particle.meshScale).toEqual(new Vector3(6, 6, 6));
  });

  it('should call the reset if function', () => {
    onParticleFrame(particle, systemState, rootState);

    expect(resetParticleWhenScaleLte).toHaveBeenCalledWith(
      particle,
      onParticleInit,
      0
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
