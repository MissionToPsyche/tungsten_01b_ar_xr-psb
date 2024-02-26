import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';

const orbiterScale = filledVector(1);

const OrbitScene: SceneComponent = () => (
  <>
    <OrbitDate />
    <FactsModalTrigger factName="psycheOrbitA">
      <DashedOrbit />
    </FactsModalTrigger>
    <OrbitName />
    <FactsModalTrigger factName="psyche">
      <Psyche rotation={[Math.PI / 3, 0, 0]} />
    </FactsModalTrigger>
    <ModelSpinner position={[0, 0, -8]} speed={-0.5} orientationY={true}>
      <OrbitOrbiter
        rotation={[0, 0, 0]}
        position={[0, 0, 15]}
        scale={orbiterScale}
      />
    </ModelSpinner>
    <ambientLight intensity={0} />
    <hemisphereLight position={[0, -150, -100]} intensity={0.5} />
    <spotLight intensity={2} position={[-4.5, 3, 0]} color={'#5F73E9'} />
    <spotLight intensity={6} position={[-4.5, 5, -50]} color={'#A15FE9'} />
    <spotLight intensity={4} position={[-4.5, 7, 0]} color={'white'} />
    <spotLight intensity={1} position={[-2.5, 7, 2]} color={'white'} />
  </>
);

export default OrbitScene;
