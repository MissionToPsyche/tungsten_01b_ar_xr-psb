import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import { AssemblySceneLight } from '../../common/components/AssemblySceneLight.tsx';

const VibrationTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssemblySceneLight />
    <VibrationTestingAnimation>
      <Orbiter position={[0, 3, 0]} rotation={[Math.PI / 8, 0, 0]} />
    </VibrationTestingAnimation>
    <AssembleTestSceneName />
    <AssembleDate />
  </Explode>
);

export default VibrationTestingScene;
