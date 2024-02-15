import { OnParticleFrameFn } from '../../ParticleSystem.tsx';
import resetParticleWhenScaleLte from '../../utils/reset-particle-when-scale-lte.ts';
import onParticleInit from './on-particle-init.ts';
import transformOnLocalAxis from '../../../utils/transform-on-local-axis.ts';
import lookAtCamera from '../../../utils/look-at-camera.ts';
import transformUniform from '../../../utils/transform-uniform.ts';
import lerpColors from '../../../utils/lerp-colors.ts';
import { Color, Vector3 } from 'three';
import upVector from '../../../utils/up-vector.ts';

const localMovementDirection = new Vector3(0, -1, 0);
const lookAtUpAxis = upVector();

/**
 * Gets an on particle frame function configured for the given parameters.
 * @param startingColor The color particles should start as
 * @param endingColor The color particles should end as
 */
const getOnParticleFrame =
  (startingColor: Color, endingColor: Color): OnParticleFrameFn =>
  /**
   * Advances a thruster particle forward a frame.
   * @param particle The particle to advance.
   * @param _ The particle system state.
   * @param camera The scene camera.
   */
  (particle, _, { camera }) => {
    // Reset the particle when it has scaled all the way down
    resetParticleWhenScaleLte(particle, onParticleInit, 0);

    // Translate the particle forward along its local axis
    transformOnLocalAxis(
      particle.position,
      particle.rotation,
      localMovementDirection,
      particle.speed * 6
    );

    // Ensure the particle mesh is facing the camera
    lookAtCamera(
      particle.meshRotation,
      particle.position,
      lookAtUpAxis,
      camera
    );

    // Scale the particle down
    transformUniform(particle.meshScale, -particle.speed);

    // These particles will always have a color, but this is a safety check
    if (!particle.color) {
      return;
    }

    // Lerp the particle to its final color
    lerpColors(particle.color, startingColor, endingColor, particle.timeAlive);
  };

export default getOnParticleFrame;
