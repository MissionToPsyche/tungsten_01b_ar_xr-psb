import { FalconHeavy } from '../../artifacts/FalconHeavy.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { LaunchPad } from '../../artifacts/LaunchPad.tsx';
import { LaunchDate } from '../../artifacts/LaunchDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModal from '../../common/facts/FactsModal.tsx';
import SmokeParticleSystem from '../../common/particle/systems/smoke/SmokeParticleSystem.tsx';

const padScale = filledVector(0.5);
const falconScale = filledVector(0.3);
const dateScale = filledVector(0.07);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <LaunchPad position={[0, 0, 0]} scale={padScale} />
    <SmokeParticleSystem position={[0.75, 1, 0]} />
    <FactsModal model="falconHeavy">
      <FalconHeavy position={[0.75, 1, 0]} scale={falconScale} />
    </FactsModal>
    <FactsModal model="launch">
      <LaunchDate position={[1, 5, 1]} scale={dateScale} />
    </FactsModal>
    <FalconHeavy position={[0.75, 1, 0]} scale={falconScale} />
    <LaunchDate position={[1, 5, 1]} scale={dateScale} />
  </>
);

export default LaunchScene;
