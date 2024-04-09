import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import { Environment } from '@react-three/drei';

const CruisePanelsScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruisePanelsAnimation />
      <BackAnimation />
      <Environment preset="forest" />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[1, 2, 3]} />
        </FactsModalTrigger>
      </RenderIf>
    </>
  );
};

export default CruisePanelsScene;
