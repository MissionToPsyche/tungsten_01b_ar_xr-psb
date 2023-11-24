import { Particle } from '../particle.ts';
import { OnParticleInitFn } from '../ParticleSystem.tsx';

/**
 * Calls the provided `onParticleInit` function when the particle scale it less than or equal to the `lte` value
 * @param particle The particle to compare against
 * @param onParticleInit The function to call when the condition is met
 * @param lte The value to compare against
 */
const resetParticleWhenScaleLte = (
  particle: Particle,
  onParticleInit: OnParticleInitFn,
  lte: number
) => {
  if (particle.meshScale.x <= lte) {
    Object.assign(particle, onParticleInit());
  }
};

export default resetParticleWhenScaleLte;
