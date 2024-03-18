import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';

const AcousticTestingScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const orbiterScaleFactor = isMobile ? filledVector(0.8) : filledVector(1.2);
  const nameScaleFactor = isMobile ? filledVector(1.4) : filledVector(1.7);
  const dateScaleFactor = isMobile ? filledVector(0.2) : filledVector(0.25);

  return (
    <Explode initialExploded={false}>
      <AssemblySceneLights />
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScaleFactor}
        rotation={[Math.PI / 8, 0, 0]}
      />
      <AssembleTestSceneName
        position={[-1.35, 13.5, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -6, 7]} />
      <AcousticTestingAnimation />
      <BackAnimation />
    </Explode>
  );
};

export default AcousticTestingScene;
