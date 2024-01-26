import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import ModelOutliner from '../../common/components/ModelOutliner.tsx';

const orbiterScale = filledVector(0.75);
const sceneNameScale = filledVector(0.75);
const sceneDateScale = filledVector(0.12);

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <ambientLight intensity={0.3} position={[0, 20, 0]} />
    <spotLight intensity={1} position={[-10, 16, -4]} color={'white'} />
    <spotLight intensity={2} position={[10, 16, -4]} color={'white'} />
    <ExplodeTrigger>
      <Orbiter position={[0, 6, -2]} scale={orbiterScale} />
    </ExplodeTrigger>
    <AssembleTestSceneName position={[0, 12, -1]} scale={sceneNameScale} />
    <AssembleAnimation />
    <ModelOutliner color={0xffffff}>
      <AssembleDate scale={sceneDateScale} position={[0, 3, 2]} />
    </ModelOutliner>
  </Explode>
);

export default AssemblyScene;
