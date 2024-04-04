import { Psyche } from '../../artifacts/Psyche.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { SceneComponent } from '../types/scene-component.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import { OrbitOrbiter } from '../../artifacts/OrbitOrbiter.tsx';
import OrbitSceneLightning from '../../common/components/OrbitSceneLightning.tsx';
import ARTooltip from '../../common/components/ARTooltip.tsx';
import useScene from '../use-scene.ts';
import RenderIf from '../../common/components/RenderIf.tsx';
import { Environment } from '@react-three/drei';
import { Euler, Group, MeshBasicMaterial, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import SceneName from '../types/scene-name.ts';
import degreesToRadians from '../../common/utils/degrees-to-radians.ts';
import { Torus } from '@react-three/drei';

const psycheScale = filledVector(5);
const orbiterScale = filledVector(1.5);

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

  const torusMaterial = new MeshBasicMaterial({
    color: '#297AA9',
    opacity: 0.5,
    transparent: true
  });

  const activeTorusMaterial = new MeshBasicMaterial({
    color: 'white',
    opacity: 0.8,
    transparent: true
  });

  const torusObjects: {
    scene: SceneName;
    args: [number, number, number, number, number];
    position: [number, number, number];
    rotation: [number, number, number];
  }[] = [
    {
      scene: SceneName.FIRST_ORBIT,
      args: [13, 0.03, 5, 50, Math.PI * 2],
      position: [0, 0, -5],
      rotation: [Math.PI / 2, 0, 0]
    },
    {
      scene: SceneName.SECOND_ORBIT,
      args: [11, 0.03, 5, 50, Math.PI * 2],
      position: [0, 0, -5],
      rotation: [Math.PI / 2, Math.PI / 12, 0]
    },
    {
      scene: SceneName.THIRD_ORBIT,
      args: [9, 0.03, 5, 50, Math.PI * 2],
      position: [0, 0, -5],
      rotation: [Math.PI / 2, Math.PI / 6, 0]
    },
    {
      scene: SceneName.FOURTH_ORBIT,
      args: [8, 0.03, 5, 50, Math.PI * 2],
      position: [0, -0.5, -5],
      rotation: [0, 0, 0]
    }
  ];

  return (
    <>
      <BackAnimation />
      <Environment preset="forest" />
      <FactsModalTrigger factName="psycheOrbitA">
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[6, 0, 7]} />
          {torusObjects.map((torusProps, index) => (
            <Torus
              key={index}
              args={torusProps.args as [number, number, number, number, number]}
              position={torusProps.position}
              rotation={torusProps.rotation}
              material={
                currentScene === torusProps.scene && !isTransitioning
                  ? activeTorusMaterial
                  : torusMaterial
              }
            />
          ))}
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psycheOrbitB">
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[6, 2, 5]} />
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psycheOrbitC">
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[6.5, 3.5, 1]} />
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psycheOrbitD">
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[3, 7, -4]} />
        </RenderIf>
      </FactsModalTrigger>
      <FactsModalTrigger factName="psyche">
        <Psyche
          position={[0, 0, -5]}
          scale={psycheScale}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <RenderIf shouldRender={!isTransitioning}>
          <ARTooltip position={[-6, 2, 0]} />
        </RenderIf>
      </FactsModalTrigger>
      <group ref={orbiterGroupRef}>
        <OrbitOrbiter
          position={[0, 0, 0]}
          scale={orbiterScale}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </group>
      <OrbitSceneLightning />
    </>
  );
};

export default Orbit;
