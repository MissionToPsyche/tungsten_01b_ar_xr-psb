import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';

const dateScale = filledVector(0.35);
const nameScale = filledVector(1.5);

const CruiseScene: SceneComponent = () => (
  <>
  <CruiseDate position={[2, -2, 4]} scale={dateScale}/>
  <CruiseName position={[-1.5, 10, -1]}  scale={nameScale}/>
  </>
);

export default CruiseScene;
