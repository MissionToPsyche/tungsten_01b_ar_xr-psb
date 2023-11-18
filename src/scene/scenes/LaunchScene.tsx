import { FalconHeavy } from '../../artifacts/FalconHeavy.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { LaunchPad } from '../../artifacts/LaunchPad.tsx';
import { LaunchDate } from '../../artifacts/LaunchDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModal from '../../common/facts/FactsModal.tsx';
import SmokeParticleSystem from '../../common/particle/systems/smoke/SmokeParticleSystem.tsx';
import ModelOutliner from '../../common/components/ModelOutliner.tsx';

const padScale = filledVector(0.5);
const falconScale = filledVector(0.3);
const dateScale = filledVector(0.04);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <ModelOutliner color={0xffffff}>
      <LaunchPad position={[0, 0, 0]} scale={padScale} />
      <SmokeParticleSystem position={[0.75, 1, 0]} />
      <FactsModal model="falconHeavy">
        <FalconHeavy outline position={[0.75, 1, 0]} scale={falconScale} />
      </FactsModal>
      <FactsModal model="launch">
        <LaunchDate position={[1, 5, 1]} scale={dateScale} />
      </FactsModal>
    </ModelOutliner>
  </>
);

export default LaunchScene;
