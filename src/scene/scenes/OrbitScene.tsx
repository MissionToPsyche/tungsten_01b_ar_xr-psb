import { OrbitDate } from '../../artifacts/OrbitDate.tsx'
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';

const dateScale = filledVector(0.35);
const nameScale = filledVector(1.2);

const OrbitScene: SceneComponent = () => (
  <>
    <OrbitDate position={[-4.5, -2, 4]} scale={dateScale} />
    <OrbitName position={[0, 10, -1]}  scale={nameScale}/>
  </>
);

export default OrbitScene;
