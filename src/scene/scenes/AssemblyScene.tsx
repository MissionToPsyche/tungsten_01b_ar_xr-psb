import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import { Box } from '@react-three/drei';
import ExplodeElement from '../../common/explode/ExplodeElement.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import randomRange from '../../common/utils/random-range.ts';

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <AssembleAnimation />
    <ExplodeTrigger>
      <Box />
    </ExplodeTrigger>
    {[
      [2, 2, 2],
      [-2, 2, 2],
      [2, -2, 2],
      [-2, -2, 2],
      [2, 2, -2],
      [-2, 2, -2],
      [2, -2, -2],
      [-2, -2, -2]
    ].map((explodePosition, index) => (
      <ExplodeElement
        key={explodePosition.toString()}
        startPosition={[0, 0, 0]}
        explodedPosition={explodePosition as never}
        startRotation={[0, 0, 0]}
        explodedRotation={[
          randomRange(-Math.PI, Math.PI),
          randomRange(-Math.PI, Math.PI),
          randomRange(-Math.PI, Math.PI)
        ]}
        delay={index * 50}
      >
        <Box />
      </ExplodeElement>
    ))}
  </Explode>
);

export default AssemblyScene;
