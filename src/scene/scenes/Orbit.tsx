import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import { DashedOrbit } from '../../artifacts/DashedOrbit.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import { Environment } from '@react-three/drei';
import { Euler, Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import SceneName from '../types/scene-name.ts';
import degreesToRadians from '../../common/utils/degrees-to-radians.ts';

const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);
const dashScale = filledVector(2.8);

const getOrbitPosition = (
  orbitCenter: Vector3,
  orbitPlaneRotation: Euler,
  orbitRadius: number,
  time: number,
  speed: number
) => {
  const x = Math.cos(time * speed) * orbitRadius;
  const y = Math.sin(time * speed) * orbitRadius;
  const z = 0;

  return new Vector3(x, y, z).applyEuler(orbitPlaneRotation).add(orbitCenter);
};

const orbitSettings: Record<
  number,
  {
    radius: number;
    planeRotation: Euler;
    center: Vector3;
    speed: number;
  }
> = {
  [SceneName.FIRST_ORBIT]: {
    radius: 14,
    planeRotation: new Euler(degreesToRadians(90), 0, degreesToRadians(90)),
    center: new Vector3(0, 0, -5),
    speed: 0.65
  },
  [SceneName.SECOND_ORBIT]: {
    radius: 12,
    planeRotation: new Euler(
      degreesToRadians(90),
      degreesToRadians(15),
      degreesToRadians(90)
    ),
    center: new Vector3(0, 0, -5),
    speed: 0.65
  },
  [SceneName.THIRD_ORBIT]: {
    radius: 12,
    planeRotation: new Euler(
      degreesToRadians(90),
      degreesToRadians(30),
      degreesToRadians(90)
    ),
    center: new Vector3(0, 0, -5),
    speed: 0.65
  },
  [SceneName.FOURTH_ORBIT]: {
    radius: 9,
    planeRotation: new Euler(
      degreesToRadians(0),
      degreesToRadians(0),
      degreesToRadians(0)
    ),
    center: new Vector3(0, 0, -5),
    speed: 0.5
  }
};

const Orbit: SceneComponent = () => {
  const { isTransitioning, currentScene } = useScene();
  const orbiterGroupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!orbiterGroupRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!orbitSettings[currentScene]) return;

    const { radius, planeRotation, center, speed } =
      orbitSettings[currentScene];

    const time = clock.getElapsedTime();

    const desiredOrbiterPosition = getOrbitPosition(
      center,
      planeRotation,
      radius,
      time,
      speed
    );

    orbiterGroupRef.current.position.lerp(desiredOrbiterPosition, 0.1);
    orbiterGroupRef.current.lookAt(center);
  });

  return (
    <>
      <BackAnimation />
      <Environment preset="forest" />
      <FactsModalTrigger factName="psycheOrbitA">
        <DashedOrbit
          position={[0, 0, -18]}
          scale={dashScale}
          rotation={[0.1, Math.PI / 2, -0.1]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[10.5, 0, 5]} />
        </RenderIf>
      </FactsModalTrigger>
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
      <FactsModalTrigger factName="psycheOrbitD">
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
          <ARTooltip position={[-1, 7, 0]} />
        </RenderIf>
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
        position={[0, 8, -5]}
        scale={[1.7, 3, 1.7]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      />
      <group ref={orbiterGroupRef}>
        <OrbitOrbiter
          rotation={[0, 0, 0]}
          position={[0, 0, 0]}
          scale={orbiterScale}
        />
      </group>
      <OrbitSceneLightning />
    </>
  );
};

export default Orbit;
