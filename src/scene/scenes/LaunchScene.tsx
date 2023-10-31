import { FalconHeavy } from '../../artifacts/FalconHeavy.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { LaunchPad } from '../../artifacts/LaunchPad.tsx';

const padScale = 0.5;
const falconScale = 0.3;

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <LaunchPad position={[0, 0, 0]} scale={[padScale, padScale, padScale]} />
    <FalconHeavy
      position={[0.75, 1, 0]}
      scale={[falconScale, falconScale, falconScale]}
    />
  </>
);

export default LaunchScene;
