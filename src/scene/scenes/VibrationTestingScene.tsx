import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import VibrationTestingAnimation from '../../animations/VibrationTestingAnimation.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';

const orbiterScale = filledVector(0.9);
const sceneNameScale = filledVector(1.5);
// const sceneDateScale = filledVector(0.2);

const VibrationTestingScene: SceneComponent = () => (
  <Explode initialExploded={false}>
    <ambientLight intensity={0.1} position={[0, 20, 0]} />
    <spotLight intensity={0.1} position={[-14, 6, 4]} color={'lightblue'} />
    <spotLight intensity={0.1} position={[10, 10, 0]} color={'#70707e'} />
    <hemisphereLight position={[0, 10, -5]} intensity={0.1} color={'yellow'} />
    <hemisphereLight position={[0, -4, 8]} intensity={0.1} color={'white'} />
    <spotLight intensity={0.15} position={[-7.5, 30, -6]} color={'#08029d'} />
    <spotLight intensity={1} position={[-9.5, 30, -2]} color={'#b94204'} />
    <spotLight intensity={0.15} position={[-14.5, 28, -5]} color={'#70707e'} />
    <spotLight intensity={0.05} position={[8.5, 30, -7]} color={'#08029d'} />
    <spotLight
      intensity={0.05}
      position={[-12.5, 15, -1.5]}
      color={'#646a85'}
    />
    <spotLight intensity={0.5} position={[10.5, 26, -2]} color={'#441359'} />
    <VibrationTestingAnimation>
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScale}
        rotation={[Math.PI / 8, 0, 0]}
      />
    </VibrationTestingAnimation>
    <AssembleTestSceneName position={[-1.2, 13.6, -4]} scale={sceneNameScale} />
    <AssembleDate position={[-0.8, -4, 8]} />
  </Explode>
);

export default VibrationTestingScene;
