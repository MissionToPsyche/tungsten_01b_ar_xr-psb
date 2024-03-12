import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';

const dateScale = filledVector(0.25);
const nameScale = filledVector(1.2);
const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const FirstOrbitScene: SceneComponent = () => (
  <>
    <BackAnimation />
    <OrbitDate
      position={[4, -3, 14]}
      scale={dateScale}
      rotation={[-Math.PI / 16, 0, 0]}
    />
    <FactsModalTrigger factName="psycheOrbitA">
      <DashedOrbit
        position={[0, 0, -18]}
        scale={dashScale}
        rotation={[0.1, Math.PI / 2, -0.1]}
      />
    </FactsModalTrigger>

    <OrbitName position={[0, 8.5, -8]} scale={nameScale} />
    <FactsModalTrigger factName="psyche">
      <Psyche
        position={[0, 0, -5]}
        scale={psycheScale}
        rotation={[Math.PI / 3, 0, 0]}
      />
    </FactsModalTrigger>
    <DashedOrbit
      position={[11, 4, -4]}
      scale={2.4}
      rotation={[0, 0, Math.PI / 12]}
    />
    <DashedOrbit
      position={[10, 7, -4.5]}
      scale={2.4}
      rotation={[0, 0, Math.PI / 6]}
    />
    <DashedOrbit
      position={[0, 8.5, -5]}
      scale={1.7}
      rotation={[0, 0, Math.PI / 2]}
    />
    <ModelSpinner
      position={[0, 0, -5]}
      speed={0.3}
      orientationY={true}
      orientationZ={true}
    >
      <OrbitOrbiter
        rotation={[0, 0, 0]}
        position={[0, 0, 15]}
        scale={orbiterScale}
      />
    </ModelSpinner>
    <OrbitSceneLightning />
  </>
);

export default FirstOrbitScene;
