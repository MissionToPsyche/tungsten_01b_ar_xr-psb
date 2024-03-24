import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';

const orbiterScaleFactor = filledVector(0.8);
const nameScaleFactor = filledVector(1);
const dateScaleFactor = filledVector(0.16);

const AcousticTestingScene: SceneComponent = () => {
  return (
    <Explode initialExploded={false}>
      <AssemblySceneLights />
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScaleFactor}
        rotation={[Math.PI / 8, 0, 0]}
      />
      <AssembleTestSceneName
        position={[-1.35, 11, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -4, 7]} />
      <AcousticTestingAnimation />
      <BackAnimation />
    </Explode>
  );
};

export default AcousticTestingScene;
