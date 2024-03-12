import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';

const orbiterScale = filledVector(0.75);
const sceneNameScale = filledVector(0.9);
const sceneDateScale = filledVector(0.2);

const AcousticTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssemblySceneLights />
    <Orbiter
      position={[0, 3, 0]}
      scale={orbiterScale}
      rotation={[Math.PI / 8, 0, 0]}
    />
    <AssembleTestSceneName position={[0, 9.8, 0]} scale={sceneNameScale} />
    <AssembleDate scale={sceneDateScale} position={[0, -5, 5]} />
    <AcousticTestingAnimation />
    <BackAnimation />
  </Explode>
);

export default AcousticTestingScene;
