import ExplodeTrigger from '../../common/explode/ExplodeTrigger.tsx';
import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import AssembleAnimation from '../../animations/AssembleAnimation.tsx';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import { Box } from '@react-three/drei';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import StaticExplodeElement from '../../common/explode/StaticExplodeElement.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';

const orbiterScale = filledVector(0.75);
const sceneNameScale = filledVector(0.9);
const sceneDateScale = filledVector(0.2);

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
      position={[0, -5, 5]}
      rotation={[-Math.PI / 8, 0, 0]}
    />
  </Explode>
);

export default AssemblyScene;
