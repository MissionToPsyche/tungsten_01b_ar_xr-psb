import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const nameScaleFactor = filledVector(1.8);
const dateScaleFactor = filledVector(0.32);

const CruiseGravityAssistScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseGravityAssistAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-2, 11, -5]} scale={nameScaleFactor} />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[5, 2, 4]} />
        </FactsModalTrigger>
      </RenderIf>
      <FactsModalTrigger factName="cruiseDate">
        <CruiseDate
          position={[10, -7, 4]}
          scale={dateScaleFactor}
          rotation={[-Math.PI / 16, 0, 0]}
        />
      </FactsModalTrigger>
    </>
  );
};

export default CruiseGravityAssistScene;
