import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { Box } from '@react-three/drei';
import BackAnimation from '../../animations/BackAnimation.tsx';
import StaticExplodeElement from '../../common/explode/StaticExplodeElement.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';
import AssembleSceneTooltips from '../../common/components/AssembleSceneTooltips.tsx';

const orbiterScale = filledVector(0.75);

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <AssembleSceneTooltips />
    <AssemblySceneLights />
    <ExplodeTrigger>
      <StaticExplodeElement>
        {(isExploded) => (
          <Box
            position={[0, 4, 0.5]}
            scale={isExploded ? 4 : 2}
            rotation={[Math.PI / 8, 0, 0]}
          >
            <meshBasicMaterial transparent opacity={0} />
          </Box>
        )}
      </StaticExplodeElement>
    </ExplodeTrigger>
    <Orbiter
      position={[0, 3, 0]}
      scale={orbiterScale}
      rotation={[Math.PI / 8, 0, 0]}
    />
    <AssembleAnimation />
    <BackAnimation />
  </Explode>
);

export default AssemblyScene;
