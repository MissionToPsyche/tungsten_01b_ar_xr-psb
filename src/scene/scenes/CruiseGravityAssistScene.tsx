import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';

const CruiseGravityAssistScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const nameScaleFactor = isMobile ? filledVector(1.9) : filledVector(2.2);
  const dateScaleFactor = isMobile ? filledVector(0.28) : filledVector(0.3);
  return (
    <>
      <CruiseGravityAssistAnimation />
      <BackAnimation />
      <CruiseSceneLights />
      <CruiseName position={[-2, 13.3, -5]} scale={nameScaleFactor} />
      <FactsModalTrigger factName="cruiseDate">
        <CruiseDate
          position={[1.8, -3.2, 12]}
          scale={dateScaleFactor}
          rotation={[-Math.PI / 16, 0.4, 0]}
        />
      </FactsModalTrigger>
    </>
  );
};

export default CruiseGravityAssistScene;
