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

const padScale = filledVector(0.4);
const falconScale = filledVector(0.4);
const dateScale = filledVector(0.3);
const sceneNameScale = filledVector(2);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => {
  const { disableAr } = useSceneConfig();

  return (
    <>
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
            position={[1.2, -3.9, 1]}
            scale={falconScale}
            rotation={[0, 0, 0]}
          />
        </FactsModalTrigger>
      </LiftoffAnimation>
      <FactsModalTrigger factName="launch">
        <LaunchDateModel position={[9, -5, 7.5]} scale={dateScale} />
      </FactsModalTrigger>
      <LaunchSceneName position={[-2, 18.6, -5]} scale={sceneNameScale} />
      <RenderIf shouldRender={disableAr}>
        <Sky sunPosition={[2, 50, 100]} />
        <Clouds>
          <Cloud position={[-8, 10, -8]} opacity={0.5} />
          <Cloud position={[8, 12, -8]} opacity={0.4} />
        </Clouds>
      </RenderIf>
    </>
  );
};

export default LaunchScene;
