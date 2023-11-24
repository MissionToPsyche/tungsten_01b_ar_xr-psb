import ReactThreeTestRenderer from '@react-three/test-renderer';
import onParticleInit from '../on-particle-init.ts';
import { expect, vi } from 'vitest';
import { Euler, Vector3 } from 'three';
import ThrusterParticleSystem from '../ThrusterParticleSystem.tsx';
import onParticleFrame from '../on-particle-frame.ts';

vi.mock('../on-particle-init.ts');
vi.mock('../on-particle-frame.ts');

const setup = () => ReactThreeTestRenderer.create(<ThrusterParticleSystem />);

vi.mocked(onParticleInit).mockReturnValue({
  position: new Vector3(0, 0, 0),
  meshScale: new Vector3(0, 0, 0),
  meshRotation: new Euler(0, 0, 0),
  speed: 1,
  timeAlive: 0,
  rotation: new Euler(0, 0, 0)
});

describe('<ThrusterParticleSystem/>', () => {
  it('should use the thruster particle init function', async () => {
    await setup();

    expect(onParticleInit).toHaveBeenCalled();
  });

  it('should use the thruster particle frame function', async () => {
    const renderer = await setup();

    await renderer.advanceFrames(1, 10);

    expect(onParticleFrame).toHaveBeenCalled();
  });

  it('should initialize 200 particles', async () => {
    await setup();

    expect(onParticleInit).toHaveBeenCalledTimes(200);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
