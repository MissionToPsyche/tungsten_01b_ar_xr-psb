import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModal from '../../common/facts/FactsModal.tsx';
import SmokeParticleSystem from '../../common/particle/systems/smoke/SmokeParticleSystem.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import ModelOutliner from '../../common/components/ModelOutliner.tsx';

const padScale = filledVector(0.15);
const falconScale = filledVector(0.15);
const dateScale = filledVector(0.15);
const sceneNameScale = filledVector(0.6);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <spotLight intensity={0.5} position={[-5, -2, 10]} castShadow />
    <ModelOutliner color={0xffffff}>
      <LaunchPadModel position={[0, 0, 0]} scale={padScale} />
      <SmokeParticleSystem position={[0.75, 1, 0]} />
      <FactsModal model="falconHeavy">
        <FalconHeavyWithLogos
          outline
          position={[0.85, 0.7, 0]}
          scale={falconScale}
        />
      </FactsModal>
      <FactsModal model="launch">
        <LaunchDateModel position={[-1.8, 0.2, 2]} scale={dateScale} />
      </FactsModal>
      <LaunchSceneName position={[-0.5, 7.5, -1]} scale={sceneNameScale} />
    </ModelOutliner>
  </>
);

export default LaunchScene;
