import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import { Environment } from '@react-three/drei';
import { Earth } from '../../artifacts/Earth.tsx';
import { InnitialCheckoutOrbiter } from '../../artifacts/InnitialCheckoutOrbiter.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import Explode from '../../common/explode/Explode.tsx';

const earthScale = filledVector(5);
const orbiterScale = filledVector(0.75);

const CruisePanelsScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <Explode initialExploded={true}>
      <CruisePanelsAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <Environment preset="forest" />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[-2.5, -1.9, 4]} />
        </FactsModalTrigger>
      </RenderIf>
      <Earth
        position={[6, -4, -15]}
        scale={earthScale}
        rotation={[0, Math.PI / 2, 0]}
      />
      <InnitialCheckoutOrbiter
        position={[0, 0, 2]}
        scale={orbiterScale}
        rotation={[Math.PI / 5, Math.PI / 5, Math.PI / 6]}
      />
    </Explode>
  );
};

export default CruisePanelsScene;
