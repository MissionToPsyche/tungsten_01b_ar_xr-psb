import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsTwo } from '../../artifacts/OrbitB.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import RenderIf from '../../common/components/RenderIf.tsx';
import useScene from '../use-scene.ts';
import { Environment } from '@react-three/drei';

const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const SecondOrbitScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <Environment preset="forest" />
      <FactsModalTrigger factName="psycheOrbitB">
        <DashedOrbit
          position={[11, 4, -4]}
          scale={2.4}
          rotation={[0, 0, Math.PI / 12]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[7, 3, 5]} />
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psyche">
        <Psyche
          position={[0, 0, -5]}
          scale={psycheScale}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[-1, 7, 0]} />
        </RenderIf>
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
        position={[0, 8, -5]}
        scale={[1.7, 3, 1.7]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      />
      <OrbitsTwo
        scale={orbiterScale}
        position={[0.5, -0.5, -3]}
        rotation={[-0.3, -0.5, 0.5]}
      />
      <OrbitSceneLightning />
    </>
  );
};

export default SecondOrbitScene;
