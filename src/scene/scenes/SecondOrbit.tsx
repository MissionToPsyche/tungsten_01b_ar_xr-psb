import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsTwo } from '../../artifacts/OrbitB.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';

const nameScaleFactor = filledVector(1.8);
const dateScaleFactor = filledVector(0.2);
const orbiterScaleFactor = filledVector(1.5);
const psycheScaleFactor = filledVector(5);
const dashOneScaleFactor = filledVector(2.7);
const dashTwoScaleFactor = filledVector(2.4);
const dashThreeScaleFactor = filledVector(2);
const dashFourScaleFactor = filledVector(1.7);

const SecondOrbitScene: SceneComponent = () => {
  return (
    <>
      <BackAnimation />
      <OrbitDate position={[3, -1, 12]} scale={dateScaleFactor} />
      <FactsModalTrigger factName="psycheOrbitB">
        <DashedOrbit
          position={[12, 4, -4]}
          scale={dashTwoScaleFactor}
          rotation={[0, 0, Math.PI / 12]}
        />
      </FactsModalTrigger>
      <OrbitName position={[-2, 8.6, -8]} scale={nameScaleFactor} />
      <FactsModalTrigger factName="psyche">
        <Psyche
          position={[0, 0, -5]}
          scale={psycheScaleFactor}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </FactsModalTrigger>
      <DashedOrbit
        position={[0, 0, -18]}
        scale={dashOneScaleFactor}
        rotation={[0.1, Math.PI / 2, -0.1]}
      />
      <DashedOrbit
        position={[10, 7, -4.5]}
        scale={dashThreeScaleFactor}
        rotation={[0, 0, Math.PI / 6]}
      />
      <DashedOrbit
        position={[0, 10, -5]}
        scale={dashFourScaleFactor}
        rotation={[0, 0, Math.PI / 2]}
      />
      <OrbitsTwo
        scale={orbiterScaleFactor}
        position={[0.5, -0.5, -3]}
        rotation={[-0.3, -0.5, 0.5]}
      />
      <OrbitSceneLightning />
    </>
  );
};

export default SecondOrbitScene;
