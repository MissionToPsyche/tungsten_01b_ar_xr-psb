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
import useMediaQuery from '../../common/hooks/use-media-query.ts';

const FirstOrbitScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const nameScaleFactor = isMobile ? filledVector(1.9) : filledVector(2.2);
  const dateScaleFactor = isMobile ? filledVector(0.27) : filledVector(0.3);
  const orbiterScaleFactor = isMobile ? filledVector(1.5) : filledVector(1.8);
  const psycheScaleFactor = isMobile ? filledVector(5) : filledVector(7);
  const dashOneScaleFactor = isMobile ? filledVector(2.7) : filledVector(3);
  const dashTwoScaleFactor = isMobile ? filledVector(2.4) : filledVector(2.6);
  const dashThreeScaleFactor = isMobile ? filledVector(2) : filledVector(2.2);
  const dashFourScaleFactor = isMobile ? filledVector(1.7) : filledVector(1.9);
  return (
    <>
      <BackAnimation />
      <OrbitDate position={[3, -2, 15]} scale={dateScaleFactor} />
      <FactsModalTrigger factName="psycheOrbitA">
        <DashedOrbit
          position={[0, 0.5, -18]}
          scale={dashOneScaleFactor}
          rotation={[0.1, Math.PI / 2, -0.1]}
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
        position={[11, 4, -4]}
        scale={dashTwoScaleFactor}
        rotation={[0, 0, Math.PI / 12]}
      />
      <DashedOrbit
        position={[10, 7, -4.5]}
        scale={dashThreeScaleFactor}
        rotation={[0, 0, Math.PI / 6]}
      />
      <DashedOrbit
        position={[0, 8.5, -5]}
        scale={dashFourScaleFactor}
        rotation={[0, 0, Math.PI / 2]}
      />
      <ModelSpinner
        position={[0, 0, -4]}
        speed={0.3}
        orientationY={true}
        orientationZ={true}
      >
        <OrbitOrbiter
          rotation={[0, 0, 0]}
          position={[0, 0, 16]}
          scale={orbiterScaleFactor}
        />
      </ModelSpinner>
      <OrbitSceneLightning />
    </>
  );
};

export default FirstOrbitScene;
