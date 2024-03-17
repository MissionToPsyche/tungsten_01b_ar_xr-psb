/* eslint-disable react/no-unknown-property */
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import LiftoffAnimation from '../../animations/LiftoffAnimation.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.jsx';
import { Cloud, Clouds, Sky } from '@react-three/drei';
import useSceneConfig from '../use-scene-config.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import filledVector from '../../common/utils/filled-vector.ts';

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => {
  const { disableAr } = useSceneConfig();
  const isMobile = useMediaQuery(768);
  const padScaleFactor = isMobile ? filledVector(0.4) : filledVector(0.44);
  const rocketScaleFactor = isMobile ? filledVector(0.4) : filledVector(0.44);
  const dateScaleFactor = isMobile ? filledVector(0.3) : filledVector(0.32);
  const nameScaleFactor = isMobile ? filledVector(1.8) : filledVector(2.2);

  return (
    <>
      <BackAnimation />
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
      <LaunchPadModel position={[-1, -6, 1]} scale={padScaleFactor} />
      <LiftoffAnimation>
        <FactsModalTrigger factName="falconHeavy">
          <FalconHeavyWithLogos
            position={[1.5, -4.1, 1]}
            scale={rocketScaleFactor}
            rotation={[0, 0, 0]}
          />
        </FactsModalTrigger>
      </LiftoffAnimation>
      <FactsModalTrigger factName="launch">
        <LaunchDateModel position={[0, -5, 7.5]} scale={dateScaleFactor} />
      </FactsModalTrigger>
      <LaunchSceneName position={[-1.75, 19, -4]} scale={nameScaleFactor} />
      <RenderIf shouldRender={disableAr}>
        <Sky sunPosition={[2, 40, 100]} />
        <Clouds>
          <Cloud position={[-8, 14, -8]} opacity={0.5} />
          <Cloud position={[8, 12, -8]} opacity={0.4} />
        </Clouds>
      </RenderIf>
    </>
  );
};

export default LaunchScene;
