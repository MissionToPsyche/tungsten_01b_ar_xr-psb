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
import { LaunchSceneLights } from '../../common/components/LaunchSceneLights.tsx';

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => {
  const { disableAr } = useSceneConfig();

  return (
    <>
      <LaunchSceneLights />
      <LaunchPadModel />
      <LiftoffAnimation>
        <FactsModalTrigger factName="falconHeavy">
          <FalconHeavyWithLogos />
        </FactsModalTrigger>
      </LiftoffAnimation>
      <FactsModalTrigger factName="launch">
        <LaunchDateModel />
      </FactsModalTrigger>
      <LaunchSceneName />
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
