import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssembleSceneTooltips from '../../common/components/AssembleSceneTooltips.tsx';

const orbiterScale = filledVector(0.75);

const VibrationTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssembleSceneTooltips />
    <AssemblySceneLights />
    <VibrationTestingAnimation>
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScale}
        rotation={[Math.PI / 8, 0, 0]}
      />
    </VibrationTestingAnimation>
    <BackAnimation />
  </Explode>
);

export default VibrationTestingScene;
