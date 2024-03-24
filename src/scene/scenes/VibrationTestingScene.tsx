import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';

const orbiterScaleFactor = filledVector(0.8);
const nameScaleFactor = filledVector(1);
const dateScaleFactor = filledVector(0.16);

const VibrationTestingScene: SceneComponent = () => {
  return (
    <Explode initialExploded={false}>
      <AssemblySceneLights />
      <VibrationTestingAnimation>
        <Orbiter
          position={[0, 3, 0]}
          scale={orbiterScaleFactor}
          rotation={[Math.PI / 8, 0, 0]}
        />
      </VibrationTestingAnimation>
      <AssembleTestSceneName
        position={[-1.35, 11, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -4, 7]} />
      <BackAnimation />
    </Explode>
  );
};

export default VibrationTestingScene;
