import { SceneComponent } from '../types/scene-component.ts';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import { LaunchDate } from '../../artifacts/LaunchDate.tsx';
import { Explosion } from '../../artifacts/Explosion.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchPad } from '../../artifacts/LaunchPad.tsx';

const padScale = 0.2;
const falconScale = 0.2;
const dateScale = 1.5;
const sceneNameScale = 1.5;
const explosionScale = 0.25;

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <LaunchPad
      position={[0, 0, 0]}
      scale={[padScale, padScale, padScale]}
    />
    <FalconHeavyWithLogos
      position={[1.2, 3, 0]}
      scale={[falconScale, falconScale, falconScale]}
    />
    <Explosion
      position={[1, 0.75, 0]}
      scale={[explosionScale, explosionScale, explosionScale]}
    />
    <LaunchSceneName
      position={[0, 11, -2]}
      scale={[sceneNameScale, sceneNameScale, sceneNameScale]}
    />
    <LaunchDate
      position={[3.5, 5, -1]}
      scale={[dateScale, dateScale, dateScale]}
    />
  </>
);

export default LaunchScene;
