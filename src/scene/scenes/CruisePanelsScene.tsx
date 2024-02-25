import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';

const dateScale = filledVector(0.32);
const nameScale = filledVector(1.9);

const CruisePanelsScene: SceneComponent = () => (
  <>
    <CruisePanelsAnimation />
    <CruiseSceneLights />
    <CruiseName position={[-1.8, 14, -5]} scale={nameScale} />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate position={[8.35, -6, 8]} scale={dateScale} />
    </FactsModalTrigger>
  </>
);

export default CruisePanelsScene;
