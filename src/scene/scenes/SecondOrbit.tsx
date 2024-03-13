import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsTwo } from '../../artifacts/OrbitB.tsx';

const dateScale = filledVector(0.25);
const nameScale = filledVector(1.2);
const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const SecondOrbitScene: SceneComponent = () => (
  <>
    <OrbitDate
      position={[3, -3, 14]}
      scale={dateScale}
      rotation={[-Math.PI / 16, 0, 0]}
    />
    <FactsModalTrigger factName="psycheOrbitB">
      <DashedOrbit
        position={[11, 4, -4]}
        scale={2.4}
        rotation={[0, 0, Math.PI / 12]}
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
      position={[0, 0, -18]}
      scale={dashScale}
      rotation={[0.1, Math.PI / 2, -0.1]}
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
    <OrbitsTwo
      scale={orbiterScale}
      position={[0.5, -0.5, -3]}
      rotation={[-0.3, -0.5, 0.5]}
    />
    <OrbitSceneLightning />
  </>
);

export default SecondOrbitScene;
