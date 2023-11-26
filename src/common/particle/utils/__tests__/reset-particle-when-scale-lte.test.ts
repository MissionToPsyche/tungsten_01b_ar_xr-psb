import resetParticleWhenScaleLte from '../reset-particle-when-scale-lte.ts';
import { Particle } from '../../particle.ts';
import { expect, vi } from 'vitest';

const onParticleInit = vi.fn();
let particle: Particle;

describe('resetParticleWhenScaleLte', () => {
  beforeEach(() => {
    particle = {
      meshScale: {
        x: 0,
        y: 0,
        z: 0
      }
    } as unknown as Particle;
  });

  it('should not call reset if the scale is above the provided value', () => {
    particle.meshScale.x = 10;

    resetParticleWhenScaleLte(particle, onParticleInit, 5);

    expect(onParticleInit).not.toHaveBeenCalled();
  });

  it('should call reset if the scale is equal to the provided value', () => {
    particle.meshScale.x = 5;

    resetParticleWhenScaleLte(particle, onParticleInit, 5);

    expect(onParticleInit).toHaveBeenCalled();
  });

  it('should call reset if the scale is less than the provided value', () => {
    particle.meshScale.x = 1;

    resetParticleWhenScaleLte(particle, onParticleInit, 5);

    expect(onParticleInit).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
