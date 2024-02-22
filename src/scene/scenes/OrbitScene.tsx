import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbits } from '../../artifacts/Orbits.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';

const dateScale = filledVector(0.25);
const nameScale = filledVector(1.2);
const psycheScale = filledVector(3);
const orbitsScale = filledVector(1.2);

const OrbitScene: SceneComponent = () => (
  <>
    <Orbits
      position={[0, 0, -4]}
      scale={orbitsScale}
      rotation={[Math.PI - 3, Math.PI / 4, 0]}
    />
    <OrbitDate
      position={[4, -3, 14]}
      scale={dateScale}
      rotation={[-Math.PI / 16, 0, 0]}
    />
    <OrbitName position={[0, 8.5, -8]} scale={nameScale} />
    <FactsModalTrigger factName="psyche">
      <ModelSpinner position={[0, -5, -5]} speed={0.2}>
        <Psyche
          position={[-4.5, 0, 0]}
          scale={psycheScale}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </ModelSpinner>
    </FactsModalTrigger>
    <ambientLight intensity={0} />
    <hemisphereLight position={[0, -150, -100]} intensity={0.5} />
    <spotLight intensity={2} position={[-4.5, 3, 0]} color={'#5F73E9'} />
    <spotLight intensity={6} position={[-4.5, 5, -50]} color={'#A15FE9'} />
    <spotLight intensity={4} position={[-4.5, 7, 0]} color={'white'} />
    <spotLight intensity={1} position={[-2.5, 7, 2]} color={'white'} />
  </>
);

export default OrbitScene;
