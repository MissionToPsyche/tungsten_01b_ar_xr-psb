import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseThrusterAnimation from '../../animations/CruiseThrusterAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';

const CruiseThrusterScene: SceneComponent = () => (
  <>
    <CruiseThrusterAnimation />
    <CruiseSceneLights />
    <CruiseName />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate />
    </FactsModalTrigger>
  </>
);

export default CruiseThrusterScene;
