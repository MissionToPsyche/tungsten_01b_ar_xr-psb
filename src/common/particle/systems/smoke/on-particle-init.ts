import { OnParticleInitFn } from '../../ParticleSystem.tsx';
import { Euler, Vector3 } from 'three';
import randomRange from '../../../utils/random-range.ts';
import degreesToRadians from '../../../utils/degrees-to-radians.ts';

const startOffsetMax = 0.5;

/**
 * Initializes a smoke particle.
 */
const onParticleInit: OnParticleInitFn = () => ({
  position: new Vector3(
    randomRange(-startOffsetMax, startOffsetMax),
    0,
    randomRange(-startOffsetMax, startOffsetMax)
  ),
  rotation: new Euler(
    0,
    randomRange(degreesToRadians(-180), degreesToRadians(180)),
    0
  ),
  meshRotation: new Euler(0, 0, 0),
  meshScale: new Vector3().setScalar(randomRange(1, 2)),
  timeAlive: 0,
  speed: randomRange(0.001, 0.005)
});

export default onParticleInit;
