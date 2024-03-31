import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseThrusterAnimation from '../../animations/CruiseThrusterAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const CruiseThrusterScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseThrusterAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[3.5, 4.5, 3]} />
        </FactsModalTrigger>
        <FactsModalTrigger factName="propulsion">
          <ARTooltip position={[2, -1, 4.5]} />
        </FactsModalTrigger>
      </RenderIf>
    </>
  );
};

export default CruiseThrusterScene;
