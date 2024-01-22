import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import { Box } from '@react-three/drei';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <ExplodeTrigger>
      <Box position={[0, 1, 0]} scale={[2.3, 2.5, 2.3]}>
        <meshBasicMaterial color="grey" />
      </Box>
    </ExplodeTrigger>
    <Orbiter />
    <AssembleAnimation />
  </Explode>
);

export default AssemblyScene;
