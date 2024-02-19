import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import { CruiseOrbiter } from '../../artifacts/CruiseOrbiter.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import { Earth } from '../../artifacts/Earth.tsx';
import { Debris } from '../../artifacts/Debris.tsx';

const dateScale = filledVector(0.3);
const nameScale = filledVector(1.2);
const orbiterScale = filledVector(0.75);
const debrisScale = filledVector(0.15);
const marsScale = filledVector(25);

const CruiseScene: SceneComponent = () => (
  <>
    <CruiseOrbiter
      position={[0, 2, 2]}
      scale={orbiterScale}
      rotation={[Math.PI / 5, Math.PI / 5, Math.PI / 6]}
    />
    <ambientLight intensity={0.5} position={[2, 10, 0]} />
    <hemisphereLight position={[-20, 60, -150]} intensity={0.1} />
    <spotLight intensity={0.5} position={[-6, 6, 0]} color={'lightblue'} />
    <spotLight intensity={8} position={[-7.5, 2, 3]} color={'#08029d'} />
    <pointLight intensity={2} position={[-9.5, 30, 10]} color={'#b94204'} />
    <spotLight intensity={2} position={[-12.5, 15, 0]} color={'blue'} />
    <spotLight intensity={0.5} position={[10.5, 26, -2]} color={'#441359'} />
    <CruiseName position={[-1.5, 10, -1]} scale={nameScale} />
    <FactsModalTrigger factName="cruiseDate">
      <CruiseDate
        position={[9, -3, 8]}
        scale={dateScale}
        rotation={[-Math.PI / 16, 0, 0]}
      />
    </FactsModalTrigger>
    <ModelSpinner position={[0, 2, 0]} speed={0.1}>
      <Debris
        position={[0, 0, 30]}
        scale={debrisScale}
        rotation={[-Math.PI / 8, 0, 0]}
      />
    </ModelSpinner>
    <Earth position={[25, -5, -60]} scale={marsScale} />
  </>
);

export default CruiseScene;
