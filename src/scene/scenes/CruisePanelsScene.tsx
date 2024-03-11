import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruisePanelsAnimation from '../../animations/CruisePanelsAnimation.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import CruiseSceneLights from '../../common/components/CruiseSceneLights.tsx';

const dateScale = filledVector(0.3);
const nameScale = filledVector(1.2);

const CruisePanelsScene: SceneComponent = () => (
  <>
    <CruisePanelsAnimation />
    <BackAnimation />
    <CruiseSceneLights />
    <CruiseName position={[-1.5, 10, -1]} scale={nameScale} />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate
        position={[9, -3, 8]}
        scale={dateScale}
        rotation={[-Math.PI / 16, 0, 0]}
      />
    </FactsModalTrigger>
  </>
);

export default CruisePanelsScene;
