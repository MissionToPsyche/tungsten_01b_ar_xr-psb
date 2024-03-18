import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import PackOrbiterAnimation from '../../animations/PackOrbiterAnimation.tsx';

const dateScale = filledVector(0.2);
const sceneNameScale = filledVector(0.9);

const PackOrbiterScene: SceneComponent = () => (
  <>
    <PackOrbiterAnimation />
    <AssemblySceneLights />
    <spotLight position={[2, 8, 6]} intensity={1.5} color={'#fcfadc'} />
    <AssembleTestSceneName position={[0, 9.8, 0]} scale={sceneNameScale} />
    <AssembleDate scale={dateScale} position={[0.5, -5, 6]} />
    <BackAnimation />
  </>
);

export default PackOrbiterScene;
