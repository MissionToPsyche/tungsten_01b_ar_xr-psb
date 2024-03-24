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

const nameScaleFactor = filledVector(1.8);
const dateScaleFactor = filledVector(0.32);

const CruiseThrusterScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <CruiseThrusterAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-2, 12, -5]} scale={nameScaleFactor} />
      <RenderIf shouldRender={!isTransitioning}>
        <FactsModalTrigger factName="solarPanels">
          <ARTooltip position={[3.5, 6.5, 3]} />
        </FactsModalTrigger>
      </RenderIf>
      <FactsModalTrigger factName="cruiseDate">
        <OpenPanelsDate
          position={[-8, -7, 2]}
          scale={dateScaleFactor}
          rotation={[0, -Math.PI / 8, 0]}
        />
      </FactsModalTrigger>
    </>
  );
};

export default CruiseThrusterScene;
