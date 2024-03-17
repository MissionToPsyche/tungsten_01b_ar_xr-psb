import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const dateScale = filledVector(0.3);
const nameScale = filledVector(1.2);

const CruiseGravityAssistScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseGravityAssistAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-1.5, 10, -1]} scale={nameScale} />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[5, 2, 4]} />
        </FactsModalTrigger>
      </RenderIf>
      <FactsModalTrigger factName="cruiseDate">
        <CruiseDate
          position={[0, -3, 8]}
          scale={dateScale}
          rotation={[-Math.PI / 16, 0, 0]}
        />
      </FactsModalTrigger>
    </>
  );
};

export default CruiseGravityAssistScene;
