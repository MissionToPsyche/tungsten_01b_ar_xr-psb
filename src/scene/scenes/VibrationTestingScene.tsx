import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';

const VibrationTestingScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const orbiterScaleFactor = isMobile ? filledVector(0.8) : filledVector(1.2);
  const nameScaleFactor = isMobile ? filledVector(1.4) : filledVector(1.7);
  const dateScaleFactor = isMobile ? filledVector(0.2) : filledVector(0.25);

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
        position={[-1.35, 13.55, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -6, 7]} />
      <BackAnimation />
    </Explode>
  );
};

export default VibrationTestingScene;
