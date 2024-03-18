/* eslint-disable @typescript-eslint/no-unused-vars */
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
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import ExplodeElement from '../../common/explode/ExplodeElement.tsx';
import StaticExplodeElement from '../../common/explode/StaticExplodeElement.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import AssemblySceneLights from '../../common/components/AssemblySceneLights.tsx';

const AssemblyScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const orbiterScaleFactor = isMobile ? filledVector(0.8) : filledVector(1.2);
  const nameScaleFactor = isMobile ? filledVector(1.4) : filledVector(1.7);
  const dateScaleFactor = isMobile ? filledVector(0.2) : filledVector(0.25);
  const { isTransitioning } = useScene();

  return (
    <Explode initialExploded={true}>
      <RenderIf shouldRender={!isTransitioning}>
        <ExplodeElement
          startPosition={[0, 3.25, 2]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, 2.5, 3.5]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
        <FactsModalTrigger factName="spectrometer">
          <ExplodeElement
            startPosition={[-1, 7, 0]}
            startRotation={[0, 0, 0]}
            explodedPosition={[-1, 9, -1]}
            explodedRotation={[0, 0, 0]}
          >
            <ARTooltip />
          </ExplodeElement>
        </FactsModalTrigger>
        <FactsModalTrigger factName="magnetometer">
          <ExplodeElement
            startPosition={[1, 7, 0]}
            startRotation={[0, 0, 0]}
            explodedPosition={[1, 9, -1]}
            explodedRotation={[0, 0, 0]}
          >
            <ARTooltip />
          </ExplodeElement>
        </FactsModalTrigger>
        <FactsModalTrigger factName="multiSpectralImager">
          <ExplodeElement
            startPosition={[0, 4.75, -1.5]}
            startRotation={[0, 0, 0]}
            explodedPosition={[0, 5.5, -3.25]}
            explodedRotation={[0, 0, 0]}
          >
            <ARTooltip />
          </ExplodeElement>
        </FactsModalTrigger>
      </RenderIf>
      <AssemblySceneLights />
      <ExplodeTrigger>
        <StaticExplodeElement>
          {(isExploded) => (
            <Box
              position={[0, 4, 0]}
              scale={[22, 3, 8]}
              rotation={[Math.PI / 8, 0, 0]}
            >
              <meshBasicMaterial transparent opacity={0} />
            </Box>
          )}
        </StaticExplodeElement>
      </ExplodeTrigger>
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScaleFactor}
        rotation={[Math.PI / 8, 0, 0]}
      />
      <AssembleTestSceneName
        position={[-1.35, 13.5, -2]}
        scale={nameScaleFactor}
      />
      <AssembleAnimation />
      <BackAnimation />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -6, 7]} />
    </Explode>
  );
};

export default AssemblyScene;
