import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
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
    <spotLight intensity={0.6} position={[20, 10, 25]} castShadow />
    <LaunchPadModel position={[0, 0, 0]} scale={padScale} />
    <LiftoffAnimation>
      <FactsModalTrigger factName="falconHeavy">
        <FalconHeavyWithLogos position={[0.85, 0.7, 0]} scale={falconScale} />
      </FactsModalTrigger>
    </LiftoffAnimation>
    <FactsModalTrigger factName="launch">
      <LaunchDateModel position={[-1.8, 0.2, 2]} scale={dateScale} />
    </FactsModalTrigger>
    <LaunchSceneName position={[-0.5, 7.5, -1]} scale={sceneNameScale} />
  </>
);

export default LaunchScene;
