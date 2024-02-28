import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import { Box } from '@react-three/drei';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import StaticExplodeElement from '../../common/explode/StaticExplodeElement.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { AssemblySceneLight } from '../../common/components/AssemblySceneLight.tsx';

const AssemblyScene: SceneComponent = () => (
  <Explode initialExploded={true}>
    <StaticExplodeElement
      startPosition={[0, 2.25, 0]}
      startRotation={[0, 0, 0]}
      explodedPosition={[0, 0.5, -1]}
      explodedRotation={[0, 0, 0]}
    >
      {(isExploded, position) => (
        <ARTooltip
          objectPosition={position.get() as never}
          panelPosition={[0, -1, -1]}
          text={`Touch the spacecraft to ${
            isExploded ? 'put it together' : 'take it apart'
          }`}
        />
      )}
    </StaticExplodeElement>
    <FactsModalTrigger factName="spectrometer">
      <StaticExplodeElement
        startPosition={[-1, 7, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[-1, 8.5, -1]}
        explodedRotation={[0, 0, 0]}
      >
        {(isExploded, position) =>
          (isExploded || !position.idle) && (
            <ARTooltip
              objectPosition={position.get() as never}
              panelPosition={[-10, 10, -1]}
              text="Spectrometer"
            />
          )
        }
      </StaticExplodeElement>
    </FactsModalTrigger>
    <FactsModalTrigger factName="magnetometer">
      <StaticExplodeElement
        startPosition={[1, 7, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[1, 8.5, -1]}
        explodedRotation={[0, 0, 0]}
      >
        {(isExploded, position) =>
          (isExploded || !position.idle) && (
            <ARTooltip
              objectPosition={position.get() as never}
              panelPosition={[10, 10, -1]}
              text="Magnetometer"
            />
          )
        }
      </StaticExplodeElement>
    </FactsModalTrigger>
    <FactsModalTrigger factName="multiSpectralImager">
      <StaticExplodeElement
        startPosition={[0, 5, -0.5]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 5.5, -2.5]}
        explodedRotation={[0, 0, 0]}
      >
        {(isExploded, position) =>
          (isExploded || !position.idle) && (
            <ARTooltip
              objectPosition={position.get() as never}
              panelPosition={[10, 7, -1]}
              text="Multispectral Imager"
            />
          )
        }
      </StaticExplodeElement>
    </FactsModalTrigger>
    <AssemblySceneLight />
    <ExplodeTrigger>
      <Box
        position={[0, 4, 0]}
        scale={[22, 3, 8]}
        rotation={[Math.PI / 8, 0, 0]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Box>
    </ExplodeTrigger>
    <Orbiter position={[0, 3, 0]} rotation={[Math.PI / 8, 0, 0]} />
    <AssembleAnimation />
    <AssembleTestSceneName />
    <AssembleDate />
  </Explode>
);

export default AssemblyScene;
