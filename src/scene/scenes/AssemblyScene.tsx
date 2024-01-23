import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';

const orbiterScale = filledVector(0.5);

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <ambientLight intensity={0.1} position={[0, 20, 0]}/>
    <spotLight intensity={1} position={[-10, 6, 4]} color={"lightblue"}/>
    <spotLight intensity={2} position={[10, 10, 4]} color={"white"}/> 
    
    <Orbiter position={[0, 2, 0]} scale={orbiterScale}/>
    <AssembleAnimation />
  </Explode>
);

export default AssemblyScene;
