import { SceneComponent } from '../types/scene-component.ts';
import { OpenPanelsDate } from '../../artifacts/OpenPanelsDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseThrusterAnimation from '../../animations/CruiseThrusterAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const dateScale = filledVector(0.3);
const nameScale = filledVector(1.2);

const CruiseThrusterScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseThrusterAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-1.5, 10, -1]} scale={nameScale} />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[3.5, 6.5, 3]} />
        </FactsModalTrigger>
      </RenderIf>
      <FactsModalTrigger factName="cruiseDate">
        <OpenPanelsDate position={[-7, -6, 8]} scale={dateScale} />
      </FactsModalTrigger>
    </>
  );
};

export default CruiseThrusterScene;
