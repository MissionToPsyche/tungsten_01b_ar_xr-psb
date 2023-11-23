import { OnParticleFrameFn } from '../../ParticleSystem.tsx';
import onParticleInit from './on-particle-init.ts';
import transformOnLocalAxis from '../../../utils/transform-on-local-axis.ts';
import lookAtCamera from '../../../utils/look-at-camera.ts';
import upVector from '../../../utils/up-vector.ts';
import { Color, Vector3 } from 'three';

const startingColor = new Color('red');
const endingColor = new Color('yellow');

/**
 * Advances a thruster particle forward a frame.
 * @param particle The particle to advance.
 * @param _ The particle system state.
 * @param camera The scene camera.
 */
const onParticleFrame: OnParticleFrameFn = (particle, _, { camera }) => {
  // Reset the particle once it has fully scaled down
  if (particle.meshScale.x <= 0) {
    Object.assign(particle, onParticleInit());
  }

  // Translate the particle forward along its local axis
  const newPosition = transformOnLocalAxis(
    particle.position,
    particle.rotation,
    new Vector3(0, -1, 0),
    particle.speed * 3
  );
  particle.position.copy(newPosition);

  // Ensure the particle mesh is facing the camera
  const newMeshRotation = lookAtCamera(particle.position, upVector(), camera);
  particle.meshRotation.copy(newMeshRotation);

  particle.meshScale.addScalar(particle.speed * -1);
  particle.color?.lerpColors(
    startingColor,
    endingColor,
    particle.timeAlive / 5
  );
};

export default onParticleFrame;
