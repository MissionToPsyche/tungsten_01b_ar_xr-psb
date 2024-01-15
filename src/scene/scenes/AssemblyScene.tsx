import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import { Box } from '@react-three/drei';
import ExplodeElement from '../../common/explode/ExplodeElement.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <AssembleAnimation />
    <ExplodeTrigger>
      <Box />
    </ExplodeTrigger>
    <ExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[2, 2, 2]}
      startRotation={[0, 0, 0]}
      explodedRotation={[90, 0, 0]}
    >
      <Box />
    </ExplodeElement>
    <ExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[-2, 2, 2]}
      startRotation={[0, 0, 0]}
      explodedRotation={[90, 0, 0]}
    >
      <Box />
    </ExplodeElement>
    <ExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[2, -2, 2]}
      startRotation={[0, 0, 0]}
      explodedRotation={[90, 0, 0]}
    >
      <Box />
    </ExplodeElement>
    <ExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[-2, -2, 2]}
      startRotation={[0, 0, 0]}
      explodedRotation={[90, 0, 0]}
    >
      <Box />
    </ExplodeElement>
  </Explode>
);

export default AssemblyScene;
