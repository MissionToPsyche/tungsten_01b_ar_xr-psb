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
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';

const nameScaleFactor = filledVector(1.8);
const dateScaleFactor = filledVector(0.2);
const orbiterScaleFactor = filledVector(1.5);
const psycheScaleFactor = filledVector(5);
const dashOneScaleFactor = filledVector(2.7);
const dashTwoScaleFactor = filledVector(2.4);
const dashThreeScaleFactor = filledVector(2);
const dashFourScaleFactor = filledVector(1.7);

const FirstOrbitScene: SceneComponent = () => {
  const { isTransitioning } = useScene();
  return (
    <>
      <BackAnimation />
      <OrbitDate position={[3, -1, 12]} scale={dateScaleFactor} />
      <RenderIf shouldRender={!isTransitioning}>
        <ARTooltip position={[10.5, 0, 5]} />
      </RenderIf>
      <FactsModalTrigger factName="psycheOrbitA">
        <DashedOrbit
          position={[0, 0.5, -18]}
          scale={dashOneScaleFactor}
          rotation={[0.1, Math.PI / 2, -0.1]}
        />
      </FactsModalTrigger>
      <OrbitName position={[-2, 8.6, -8]} scale={nameScaleFactor} />
      <FactsModalTrigger factName="psyche">
        <Psyche
          position={[0, 0, -5]}
          scale={psycheScaleFactor}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[0, 0, 2]} />
        </RenderIf>
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
          position={[0, 0, 13]}
          scale={orbiterScaleFactor}
        />
      </ModelSpinner>
      <OrbitSceneLightning />
    </>
  );
};

export default FirstOrbitScene;
