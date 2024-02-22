import { SceneComponent } from '../types/scene-component.ts';
import { CruiseDate } from '../../artifacts/CruiseDate.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { CruiseName } from '../../artifacts/CruiseName.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import CruiseGravityAssistAnimation from '../../animations/CruiseGravityAssistAnimation.tsx';

const dateScale = filledVector(0.3);
const nameScale = filledVector(1.2);

const CruiseGravityAssistScene: SceneComponent = () => (
  <>
    <CruiseGravityAssistAnimation />
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
        position={[0, -3, 8]}
        scale={dateScale}
        rotation={[-Math.PI / 16, 0, 0]}
      />
    </FactsModalTrigger>
  </>
);

export default CruiseGravityAssistScene;
