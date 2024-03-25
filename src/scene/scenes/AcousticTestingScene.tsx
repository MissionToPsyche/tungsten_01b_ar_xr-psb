import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import AssembleSceneTooltips from '../../common/components/AssembleSceneTooltips.tsx';

const orbiterScale = filledVector(0.75);

const AcousticTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssembleSceneTooltips />
    <AssemblySceneLights />
    <Orbiter
      position={[0, 3, 0]}
      scale={orbiterScale}
      rotation={[Math.PI / 8, 0, 0]}
    />
    <AcousticTestingAnimation />
    <BackAnimation />
  </Explode>
);

export default AcousticTestingScene;
