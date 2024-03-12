import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';

const orbiterScale = filledVector(0.75);
const sceneNameScale = filledVector(0.9);
const sceneDateScale = filledVector(0.2);

const VibrationTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <AssemblySceneLights />
    <VibrationTestingAnimation>
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScale}
        rotation={[Math.PI / 8, 0, 0]}
      />
    </VibrationTestingAnimation>
    <AssembleTestSceneName position={[0, 9.8, 0]} scale={sceneNameScale} />
    <AssembleDate scale={sceneDateScale} position={[0, -5, 5]} />
  </Explode>
);

export default VibrationTestingScene;
