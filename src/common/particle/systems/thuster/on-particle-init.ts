import { OnParticleInitFn } from '../../ParticleSystem.tsx';
import { Color, Euler, Vector3 } from 'three';
import randomRange from '../../../utils/random-range.ts';

const startOffsetMax = 0.1;

/**
 * Initializes a smoke particle.
 */
const onParticleInit: OnParticleInitFn = () => ({
  position: new Vector3(
    randomRange(-startOffsetMax, startOffsetMax),
    0,
    randomRange(-startOffsetMax, startOffsetMax)
  ),
  rotation: new Euler(0, 0, 0),
  meshRotation: new Euler(0, 0, 0),
  meshScale: new Vector3().setScalar(randomRange(0.1, 1)),
  timeAlive: 0,
  speed: randomRange(0.01, 0.05),
  color: new Color('red')
});

export default onParticleInit;
