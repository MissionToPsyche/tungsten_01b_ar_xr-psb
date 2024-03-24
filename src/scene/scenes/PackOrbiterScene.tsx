import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import PackOrbiterAnimation from '../../animations/PackOrbiterAnimation.tsx';

const nameScaleFactor = filledVector(1);
const dateScaleFactor = filledVector(0.16);

const PackOrbiterScene: SceneComponent = () => {
  return (
    <>
      <PackOrbiterAnimation />
      <AssemblySceneLights />
      <spotLight position={[2, 8, 6]} intensity={1.5} color={'#fcfadc'} />
      <AssembleTestSceneName
        position={[-1.35, 11, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -4, 7]} />
      <BackAnimation />
    </>
  );
};

export default PackOrbiterScene;
