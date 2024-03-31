import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const CruiseGravityAssistScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseGravityAssistAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[3.5, 5, 1.5]} />
        </FactsModalTrigger>
        <FactsModalTrigger factName="marsDate">
          <ARTooltip position={[5, 0, 4]} />
        </FactsModalTrigger>
        <FactsModalTrigger factName="propulsion">
          <ARTooltip position={[2, -1, 4.5]} />
        </FactsModalTrigger>
      </RenderIf>
    </>
  );
};

export default CruiseGravityAssistScene;
