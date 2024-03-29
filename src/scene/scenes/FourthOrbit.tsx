import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import useScene from '../use-scene.ts';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import RenderIf from '../../common/components/RenderIf.tsx';
import { Environment } from '@react-three/drei';

const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const FirstOrbitScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <Environment preset="forest" />
      <FactsModalTrigger factName="psycheOrbitA">
        <DashedOrbit
          position={[0, 8, -5]}
          scale={[1.7, 3, 1.7]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[0, 5, 2.5]} />
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psyche">
        <Psyche
          position={[0, 0, -5]}
          scale={psycheScale}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[0, 0, 2]} />
        </RenderIf>
      </FactsModalTrigger>
      <DashedOrbit
        position={[0, 0, -18]}
        scale={dashScale}
        rotation={[0.1, Math.PI / 2, -0.1]}
      />
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

      <ModelSpinner
        position={[0, -1, -4]}
        speed={1}
        orientationZ={true}
        rotation={[0, 0, 0.5]}
      >
        <OrbitOrbiter
          rotation={[0, 0, 0]}
          position={[0, 9, 0]}
          scale={orbiterScale}
        />
      </ModelSpinner>
      <OrbitSceneLightning />
    </>
  );
};

export default FirstOrbitScene;
