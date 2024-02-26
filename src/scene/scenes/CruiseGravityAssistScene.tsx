import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';

const CruiseGravityAssistScene: SceneComponent = () => (
  <>
    <CruiseGravityAssistAnimation />
    <CruiseSceneLights />
    <CruiseName />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate />
    </FactsModalTrigger>
  </>
);

export default CruiseGravityAssistScene;
