import ReactThreeTestRenderer from '@react-three/test-renderer';
import SmokeParticleSystem from '../SmokeParticleSystem.tsx';
import onParticleInit from '../on-particle-init.ts';
import { expect, vi } from 'vitest';
import * as drei from '@react-three/drei';
import { Euler, Vector3 } from 'three';
import onParticleFrame from '../on-particle-frame.ts';

vi.mock('../on-particle-init.ts');
vi.mock('../on-particle-frame.ts');
vi.spyOn(drei, 'useTexture');

const setup = () => ReactThreeTestRenderer.create(<SmokeParticleSystem />);

vi.mocked(drei.useTexture).mockReturnValue([]);
vi.mocked(onParticleInit).mockReturnValue({
  position: new Vector3(0, 0, 0),
  meshScale: new Vector3(0, 0, 0),
  meshRotation: new Euler(0, 0, 0),
  speed: 1,
  timeAlive: 0,
  rotation: new Euler(0, 0, 0)
});

describe('<SmokeParticleSystem/>', () => {
  it('should use the smoke particle init function', async () => {
    await setup();

    expect(onParticleInit).toHaveBeenCalled();
  });

  it('should use the smoke particle frame function', async () => {
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
