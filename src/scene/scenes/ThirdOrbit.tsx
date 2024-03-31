import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import { OrbitsThree } from '../../artifacts/OrbitC.tsx';
import useScene from '../use-scene.ts';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import RenderIf from '../../common/components/RenderIf.tsx';

const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const ThirdOrbitScene: SceneComponent = () => {
  const { isTransitioning } = useScene();

  return (
    <>
      <FactsModalTrigger factName="psycheOrbitC">
        <DashedOrbit
          position={[9, 6.5, -4.5]}
          scale={2.2}
          rotation={[0, 0, Math.PI / 6]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[5, 4, 5]} />
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
        position={[11, 4, -4]}
        scale={2.4}
        rotation={[0, 0, Math.PI / 12]}
      />
      <DashedOrbit
        position={[0, 8.5, -5]}
        scale={1.7}
        rotation={[0, 0, Math.PI / 2]}
      />
      <OrbitsThree
        position={[0, 0, -4]}
        scale={orbiterScale}
        rotation={[1.2, -1.3, 1.6]}
      />
      <OrbitSceneLightning />
    </>
  );
};

export default ThirdOrbitScene;
