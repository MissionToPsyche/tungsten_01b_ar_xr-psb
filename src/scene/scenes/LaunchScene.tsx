/* eslint-disable react/no-unknown-property */
import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import LiftoffAnimation from '../../animations/LiftoffAnimation.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.jsx';
import { Cloud, Clouds, Sky } from '@react-three/drei';
import useSceneConfig from '../use-scene-config.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';

const padScale = filledVector(0.38);
const falconScale = filledVector(0.38);
const dateScale = filledVector(0.35);
const sceneNameScale = filledVector(1.3);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => {
  const { disableAr } = useSceneConfig();
  const { isTransitioning } = useScene();

  return (
    <>
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="falconHeavy">
          <ARTooltip position={[1.75, 5.5, 1]} />
        </FactsModalTrigger>
      </RenderIf>
      <ambientLight intensity={0.1} position={[0, 10, 7]} />
      <spotLight
        intensity={0.5}
        position={[-10, 10, 30]}
        color={'blue'}
        angle={-Math.PI / 4}
      />
      <hemisphereLight
        position={[-5, -20, 0]}
        intensity={0.1}
        color={'white'}
      />
      <spotLight intensity={3} position={[-1, 5, -10]} color={'#08029d'} />
      <directionalLight
        intensity={1}
        position={[-11, 40, -25]}
        color={'#441359'}
      />
      <spotLight intensity={1} position={[11, 40, -25]} color={'#441359'} />
      <LaunchPadModel position={[-1, -6, 1]} scale={padScale} />
      <LiftoffAnimation>
        <FactsModalTrigger factName="falconHeavy">
          <FalconHeavyWithLogos
            position={[1.2, -4, 1]}
            scale={falconScale}
            rotation={[0, 0, 0]}
          />
        </FactsModalTrigger>
      </LiftoffAnimation>
      <FactsModalTrigger factName="launch">
        <LaunchDateModel
          position={[11, -5, 6.5]}
          scale={dateScale}
          rotation={[-Math.PI / 30, 0, 0]}
        />
      </FactsModalTrigger>
      <LaunchSceneName position={[0, 14, -5]} scale={sceneNameScale} />
      <RenderIf shouldRender={disableAr}>
        <Sky sunPosition={[2, 40, 100]} />
        <Clouds>
          <Cloud position={[-8, 10, -8]} opacity={0.5} />
          <Cloud position={[8, 12, -8]} opacity={0.4} />
        </Clouds>
      </RenderIf>
    </>
  );
};

export default LaunchScene;
