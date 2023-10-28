import { FalconHeavy } from '../../artifacts/FalconHeavy.tsx';
import { Vector3 } from '@react-three/fiber';
import { SceneComponent } from '../types/scene-component.ts';

const boxPosition: Vector3 = [0, 1, 0];

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <FalconHeavy position={boxPosition} scale={[0.5, 0.5, 0.5]} />
);

export default LaunchScene;
