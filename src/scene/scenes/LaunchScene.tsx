import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import ModelOutliner from '../../common/components/ModelOutliner.tsx';
import LiftoffAnimation from '../../animations/LiftoffAnimation.tsx';

const padScale = filledVector(0.15);
const falconScale = filledVector(0.15);
const dateScale = filledVector(0.15);
const sceneNameScale = filledVector(0.6);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <ModelOutliner color={0xffffff}>
      <spotLight intensity={0.5} position={[-5, -2, 10]} castShadow />
      <LaunchPadModel position={[0, 0, 0]} scale={padScale} />
      <FactsModalTrigger factName="falconHeavy">
        <LiftoffAnimation>
          <FalconHeavyWithLogos
            outline
            position={[0.85, 0.7, 0]}
            scale={falconScale}
          />
        </LiftoffAnimation>
      </FactsModalTrigger>
      <FactsModalTrigger factName="launch">
        <LaunchDateModel outline position={[-1.8, 0.2, 2]} scale={dateScale} />
      </FactsModalTrigger>
      <LaunchSceneName position={[-0.5, 7.5, -1]} scale={sceneNameScale} />
    </ModelOutliner>
  </>
);

export default LaunchScene;
