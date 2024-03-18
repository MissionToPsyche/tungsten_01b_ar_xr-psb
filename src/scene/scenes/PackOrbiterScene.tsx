import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import PackOrbiterAnimation from '../../animations/PackOrbiterAnimation.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';

const PackOrbiterScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const nameScaleFactor = isMobile ? filledVector(1.4) : filledVector(1.7);
  const dateScaleFactor = isMobile ? filledVector(0.2) : filledVector(0.25);

  return (
    <>
      <PackOrbiterAnimation />
      <AssemblySceneLights />
      <spotLight position={[2, 8, 6]} intensity={1.5} color={'#fcfadc'} />
      <AssembleTestSceneName
        position={[-1.35, 13.5, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -6, 7]} />
      <BackAnimation />
    </>
  );
};

export default PackOrbiterScene;
