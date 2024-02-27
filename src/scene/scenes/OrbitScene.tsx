import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';

const isMobile = window.innerWidth < 768;

const OrbitScene: SceneComponent = () => (
  <>
    <FactsModalTrigger factName="orbitDate">
      <OrbitDate position={isMobile ? [4, -5.5, 9] : [9, -6, 10]} />
    </FactsModalTrigger>
    <FactsModalTrigger factName="psycheOrbitA">
      <DashedOrbit
        scale={isMobile ? [13, 1.25, 0.5] : [17, 1.5, 0.6]}
        rotation={[-Math.PI / 10, -Math.PI / 24, Math.PI / 24]}
        position={isMobile ? [12.5, 2, -1] : [16, 2, 0]}
      />
    </FactsModalTrigger>
    <OrbitName />
    <FactsModalTrigger factName="psyche">
      <Psyche rotation={[Math.PI / 3, 0, 0]} />
    </FactsModalTrigger>
    <ModelSpinner
      position={isMobile ? [0, 1, -4] : [0, 1, -3]}
      speed={0.4}
      orientationZ={true}
      orientationY={true}
    >
      <OrbitOrbiter position={isMobile ? [0, 4, 15] : [0, 4, 17]} />
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
