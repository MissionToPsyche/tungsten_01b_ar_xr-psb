import onParticleInit from '../on-particle-init.ts';
import { expect, Mock, vi } from 'vitest';
import randomRange from '../../../../utils/random-range.ts';
import { Euler, Vector3 } from 'three';

vi.mock('../../../../utils/random-range.ts');

const randomNumber = 5;

describe('onParticleInit', () => {
  beforeEach(() => {
    (randomRange as Mock).mockReturnValue(randomNumber);
  });

  it('should initialize the particle position with a random distribution across the x and z axis', () => {
    const actual = onParticleInit();

    expect(actual.position).toEqual(new Vector3(randomNumber, 0, randomNumber));
    expect(randomRange).toHaveBeenNthCalledWith(1, -0.5, 0.5);
    expect(randomRange).toHaveBeenNthCalledWith(2, -0.5, 0.5);
  });

  it('should initialize the particle rotation with a random y axis value', () => {
    const actual = onParticleInit();

    expect(actual.rotation).toEqual(new Euler(0, randomNumber, 0));
    expect(randomRange).toHaveBeenNthCalledWith(3, -Math.PI, Math.PI);
  });

  it('should should initialize the mesh rotation with all 0s', () => {
    const actual = onParticleInit();

    expect(actual.meshRotation).toEqual(new Euler(0, 0, 0));
  });

  it('should initialize the mesh scale with a vector filled with the same random value', () => {
    const actual = onParticleInit();

    expect(actual.meshScale).toEqual(new Vector3().setScalar(randomNumber));
    expect(randomRange).toHaveBeenNthCalledWith(4, 1, 2);
  });

  it('should initialize time alive as 0', () => {
    const actual = onParticleInit();

    expect(actual.timeAlive).toEqual(0);
  });

  it('should initialize speed as a random number', () => {
    const actual = onParticleInit();

    expect(actual.speed).toEqual(randomNumber);
    expect(randomRange).toHaveBeenNthCalledWith(5, 0.001, 0.008);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
