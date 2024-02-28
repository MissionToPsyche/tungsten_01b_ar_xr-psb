import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import { AssemblySceneLight } from '../../common/components/AssemblySceneLight.tsx';

const AcousticTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssemblySceneLight />
    <Orbiter position={[0, 3, 0]} rotation={[Math.PI / 8, 0, 0]} />
    <AssembleTestSceneName />
    <AssembleDate />
    <AcousticTestingAnimation />
  </Explode>
);

export default AcousticTestingScene;
