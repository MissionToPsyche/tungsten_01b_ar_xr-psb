import { OrbitDate } from '../../artifacts/OrbitDate.tsx';
import { OrbitName } from '../../artifacts/OrbitName.tsx';
import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsTwo } from '../../artifacts/OrbitB.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import BackAnimation from '../../animations/BackAnimation.tsx';

const SecondOrbitScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const nameScaleFactor = isMobile ? filledVector(1.9) : filledVector(2.2);
  const dateScaleFactor = isMobile ? filledVector(0.27) : filledVector(0.3);
  const orbiterScaleFactor = isMobile ? filledVector(1.5) : filledVector(1.8);
  const psycheScaleFactor = isMobile ? filledVector(5) : filledVector(7);
  const dashOneScaleFactor = isMobile ? filledVector(2.7) : filledVector(3);
  const dashTwoScaleFactor = isMobile ? filledVector(2.4) : filledVector(2.6);
  const dashThreeScaleFactor = isMobile ? filledVector(2) : filledVector(2.2);
  const dashFourScaleFactor = isMobile ? filledVector(1.7) : filledVector(2);
  return (
    <>
      <BackAnimation />
      <OrbitDate position={[3, -2, 15]} scale={dateScaleFactor} />
      <FactsModalTrigger factName="psycheOrbitB">
        <DashedOrbit
          position={[12, 4, -4]}
          scale={dashTwoScaleFactor}
          rotation={[0, 0, Math.PI / 12]}
        />
      </FactsModalTrigger>
      <OrbitName position={[-2, 10, -8]} scale={nameScaleFactor} />
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
