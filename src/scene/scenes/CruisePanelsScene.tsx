import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';

const CruisePanelsScene: SceneComponent = () => (
  <>
    <CruisePanelsAnimation />
    <CruiseSceneLights />
    <CruiseName />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate />
    </FactsModalTrigger>
  </>
);

export default CruisePanelsScene;
