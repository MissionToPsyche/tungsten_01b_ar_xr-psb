import { Particle } from './particle.ts';
import { Color, InstancedMesh } from 'three';

/**
 * Updates an instanced mesh instance with the current color of the particle if the particle has a color and that color
 * is not deeply equal to the current color of the mesh instance
 * @param particle The particle to pull the color from
 * @param instancedMesh The instanced mesh that contains the mesh instance
 * @param instanceIndex The index of the instance in the instance mesh
 * @param tempColor A temporary object to copy the current instance color to for comparison
 * @returns True if the color was updated, false otherwise
 */
const updateMeshInstanceColor = (
  particle: Particle,
  instancedMesh: InstancedMesh,
  instanceIndex: number,
  tempColor: Color
): boolean => {
  if (particle.color) {
    try {
      instancedMesh.getColorAt(instanceIndex, tempColor);
    } catch {
      /* Color array will be empty and throw until set for the first time */
    }

    if (!particle.color.equals(tempColor)) {
      instancedMesh.setColorAt(instanceIndex, particle.color);
      return true;
    }
  }

  return false;
};

export default updateMeshInstanceColor;
