import { OnParticleInitFn } from '../../ParticleSystem.tsx';
import { Euler, Vector3 } from 'three';
import randomRange from '../../../utils/random-range.ts';
import degreesToRadians from '../../../utils/degrees-to-radians.ts';

const startOffsetMax = 0.4;

/**
 * Initializes a sound particle.
 */
const onParticleInit: OnParticleInitFn = () => ({
  position: new Vector3(
    randomRange(-startOffsetMax, startOffsetMax),
    0,
    randomRange(-startOffsetMax, startOffsetMax)
  ),
  rotation: new Euler(
    randomRange(degreesToRadians(0), degreesToRadians(30)),
    0,
    0
  ),
  meshRotation: new Euler(0, 0, 0),
  meshScale: new Vector3().setScalar(1),
  timeAlive: 0,
  speed: randomRange(0.009, 0.005)
});

export default onParticleInit;
