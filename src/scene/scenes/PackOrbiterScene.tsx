import { SceneComponent } from '../types/scene-component.ts';
import BackAnimation from '../../animations/BackAnimation.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import PackOrbiterAnimation from '../../animations/PackOrbiterAnimation.tsx';
import { Environment } from '@react-three/drei';

const PackOrbiterScene: SceneComponent = () => (
  <>
    <PackOrbiterAnimation />
    <AssemblySceneLights />
    <Environment preset="forest" />
    <spotLight position={[2, 8, 6]} intensity={1} color={'#fcfadc'} />
    <BackAnimation />
  </>
);

export default PackOrbiterScene;
