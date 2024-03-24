import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsThree } from '../../artifacts/OrbitC.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';

const nameScaleFactor = filledVector(1.8);
const dateScaleFactor = filledVector(0.2);
const orbiterScaleFactor = filledVector(1.5);
const psycheScaleFactor = filledVector(5);
const dashOneScaleFactor = filledVector(2.7);
const dashTwoScaleFactor = filledVector(2.4);
const dashThreeScaleFactor = filledVector(2);
const dashFourScaleFactor = filledVector(1.7);

const ThirdOrbitScene: SceneComponent = () => {
  return (
    <>
      <BackAnimation />
      <OrbitDate position={[3, -1, 12]} scale={dateScaleFactor} />
      <FactsModalTrigger factName="psycheOrbitC">
        <DashedOrbit
          position={[9.5, 7, -4.5]}
          scale={dashThreeScaleFactor}
          rotation={[0, 0, Math.PI / 6]}
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
        position={[11, 4, -4]}
        scale={dashTwoScaleFactor}
        rotation={[0, 0, Math.PI / 12]}
      />
      <DashedOrbit
        position={[0, 10, -5]}
        scale={dashFourScaleFactor}
        rotation={[0, 0, Math.PI / 2]}
      />
      <OrbitsThree
        position={[0, 0, -4]}
        scale={orbiterScaleFactor}
        rotation={[1.2, -1.3, 1.6]}
      />
      <OrbitSceneLightning />
    </>
  );
};

export default ThirdOrbitScene;
