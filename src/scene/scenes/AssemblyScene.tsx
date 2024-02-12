import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import { Box } from '@react-three/drei';
import { Text } from '@react-three/drei';

const orbiterScale = filledVector(0.75);
const sceneNameScale = filledVector(0.9);
const sceneDateScale = filledVector(0.2);

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <Text
      fontSize={0.8}
      position={[0, -1.5, -2]}
      rotation={[-Math.PI / 8, 0, 0]}
    >
      Touch the spacecraft to put it together
    </Text>
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
    <ExplodeTrigger>
      <Box
        position={[0, 4, 0]}
        scale={[22, 3, 8]}
        rotation={[Math.PI / 8, 0, 0]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Box>
    </ExplodeTrigger>
    <Orbiter
      position={[0, 3, 0]}
      scale={orbiterScale}
      rotation={[Math.PI / 8, 0, 0]}
    />
    <AssembleTestSceneName position={[0, 9.8, 0]} scale={sceneNameScale} />
    <AssembleAnimation />
    <AssembleDate
      scale={sceneDateScale}
      position={[0, -4, 5]}
      rotation={[-Math.PI / 16, 0, 0]}
    />
  </Explode>
);

export default AssemblyScene;
