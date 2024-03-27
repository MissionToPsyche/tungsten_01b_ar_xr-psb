import { OnParticleInitFn } from '../../ParticleSystem.tsx';
import { Euler, Vector3 } from 'three';
import degreesToRadians from '../../../utils/degrees-to-radians.ts';

/**
 * Initializes a sound particle.
 */
const onParticleInitCountdown: OnParticleInitFn = () => ({
  position: new Vector3(0, 0, 0),
  rotation: new Euler(0, 0, 0),
  meshRotation: new Euler(
    degreesToRadians(-10),
    degreesToRadians(0),
    degreesToRadians(0)
  ),
  meshScale: new Vector3().setScalar(1),
  timeAlive: 0,
  speed: 0
});

export default onParticleInitCountdown;
