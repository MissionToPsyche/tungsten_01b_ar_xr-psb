import { Particle } from '../../particle.ts';
import { Color, InstancedMesh } from 'three';
import { expect, vi } from 'vitest';
import updateMeshInstanceColor from '../update-mesh-instance-color.ts';

let particle: Particle;
let tmpColor: Color;
const getColorAt = vi.fn();
const setColorAt = vi.fn();
const instancedMesh: InstancedMesh = {
  getColorAt,
  setColorAt
} as unknown as InstancedMesh;

describe('updateMeshInstanceColor', () => {
  beforeEach(() => {
    tmpColor = new Color();
    particle = {
      color: new Color('yellow')
    } as unknown as Particle;
  });

  it('should do nothing and return false if the particle has no color', () => {
    particle.color = undefined;

    expect(
      updateMeshInstanceColor(particle, instancedMesh, 0, tmpColor)
    ).toBeFalsy();
    expect(setColorAt).not.toHaveBeenCalled();
  });

  it('should do nothing and return false if the colors are already equal', () => {
    tmpColor = new Color('yellow');

    updateMeshInstanceColor(particle, instancedMesh, 0, tmpColor);

    expect(getColorAt).toHaveBeenCalledWith(0, tmpColor);
    expect(setColorAt).not.toHaveBeenCalled();
  });

  it('should set the color and return true if the colors are not equal', () => {
    updateMeshInstanceColor(particle, instancedMesh, 0, tmpColor);

    expect(getColorAt).toHaveBeenCalledWith(0, tmpColor);
    expect(setColorAt).toHaveBeenCalledWith(0, particle.color);
  });

  it('should set the color and return true if getColorAt throws, indicating the color was not initialized yet', () => {
    getColorAt.mockImplementationOnce(() => {
      throw Error();
    });

    updateMeshInstanceColor(particle, instancedMesh, 0, tmpColor);

    expect(setColorAt).toHaveBeenCalledWith(0, particle.color);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
