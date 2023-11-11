import { Euler, Vector3 } from 'three';

/**
 * Represents a particle in a particle system.
 */
export interface Particle {
  // The position of the particle
  position: Vector3;
  // The rotation of the particle
  rotation: Euler;
  // The rotation of the mesh that represents the particle
  meshRotation: Euler;
  // The scale of the mesh that represents the particle
  meshScale: Vector3;
  // The time that the particle has been alive, delta time for frame rate consideration
  timeAlive: number;
  // The speed of the particle
  speed: number;
}
