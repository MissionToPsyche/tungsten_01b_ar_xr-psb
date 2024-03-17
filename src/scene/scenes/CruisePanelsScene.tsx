import { SceneComponent } from '../types/scene-component.ts';
import { OpenPanelsDate } from '../../artifacts/OpenPanelsDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';

const CruisePanelsScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const nameScaleFactor = isMobile ? filledVector(1.9) : filledVector(2.2);
  const dateScaleFactor = isMobile ? filledVector(0.35) : filledVector(0.4);

  return (
    <>
      <CruisePanelsAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-2, 14.5, -5]} scale={nameScaleFactor} />
      <FactsModalTrigger factName="cruiseDate">
        <OpenPanelsDate
          position={[-10, -6, 2]}
          scale={dateScaleFactor}
          rotation={[0, -Math.PI / 8, 0]}
        />
      </FactsModalTrigger>
    </>
  );
};

export default CruisePanelsScene;
