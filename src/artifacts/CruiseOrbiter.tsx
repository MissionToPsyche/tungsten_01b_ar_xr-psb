/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/orbiter-anim.gltf -tT -o O.tsx -r /assets/models --keepgroups 
Files: ./public/assets/models/orbiter-anim.gltf [513.62MB] > orbiter-anim-transformed.glb [38.84MB] (92%)
*/

import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Color } from 'three';
import ThrusterParticleSystem from '../common/particle/systems/thruster/ThrusterParticleSystem';
import FactsModalTrigger from '../facts/FactsModalTrigger';

const thrusterStartingColor = new Color('#0065cb');
const thrusterEndingColor = new Color('#06307a');

type GLTFResult = GLTF & {
  nodes: {
    SolarPanelLeft1: THREE.Mesh;
    SolarPanelLeft1_1: THREE.Mesh;
    SolarPanelLeft1003: THREE.Mesh;
    SolarPanelLeft1003_1: THREE.Mesh;
    SolarPanelLeft1004: THREE.Mesh;
    SolarPanelLeft1004_1: THREE.Mesh;
    Cube002: THREE.Mesh;
    Icosphere_1: THREE.Mesh;
    Icosphere_2: THREE.Mesh;
    Cylinder: THREE.Mesh;
    PanelFrameLeft: THREE.Mesh;
    PanelFrameRight: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    Panel_Material: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    FoilMaterial: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    AlumFoilBack: THREE.MeshStandardMaterial;
  };
};

export function CruiseOrbiter(
  props: {
    thrustersOn: boolean;
    panelsOpen: boolean;
    animatePanels: boolean;
  } & JSX.IntrinsicElements['group']
) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/cruise-orbiter-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const { thrustersOn, panelsOpen, animatePanels } = props;

  useEffect(() => {
    const playAnimation = (action: THREE.AnimationAction) => {
      action.setLoop(THREE.LoopRepeat, 1);
      if (panelsOpen) {
        if (!animatePanels) {
          action.time = action.getClip().duration;
        }
      }
      action.clampWhenFinished = true;
      action.play();
    };
    if (panelsOpen) {
      playAnimation(actions.leftPanelMove as never);
      playAnimation(actions.leftOneMove as never);
      playAnimation(actions.leftTwoMove as never);
      playAnimation(actions.leftThreeMove as never);
      playAnimation(actions.leftFourMove as never);
      playAnimation(actions.leftFiveMove as never);
      playAnimation(actions.rightPanelMove as never);
      playAnimation(actions.rightOneMove as never);
      playAnimation(actions.rightTwoMove as never);
      playAnimation(actions.rightThreeMove as never);
      playAnimation(actions.rightFourMove as never);
      playAnimation(actions.rightFiveMove as never);
    }
  }, [
    actions.leftFiveMove,
    actions.leftFourMove,
    actions.leftOneMove,
    actions.leftPanelMove,
    actions.leftThreeMove,
    actions.leftTwoMove,
    actions.rightFiveMove,
    actions.rightFourMove,
    actions.rightOneMove,
    actions.rightPanelMove,
    actions.rightThreeMove,
    actions.rightTwoMove,
    panelsOpen,
    animatePanels
  ]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <>
          <ThrusterParticleSystem
            visible={thrustersOn}
            particleStartColor={thrusterStartingColor}
            particleEndColor={thrusterEndingColor}
            position={[0, -1.25, 2.8]}
            rotation={[0, Math.PI / 2, 0]}
            count={70}
          />
          <ThrusterParticleSystem
            visible={thrustersOn}
            particleStartColor={thrusterStartingColor}
            particleEndColor={thrusterEndingColor}
            position={[0, -1.25, -2.8]}
            rotation={[0, Math.PI / 2, 0]}
            count={70}
          />
        </>
        <FactsModalTrigger factName="solarPanels">
          <group
            name="SolarPanelLeft_1"
            position={[-1.7, 0.6, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelLeft_2"
            position={[-1.8, 0.6, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelLeft_3"
            position={[-1.87, 0.6, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelRight_1"
            position={[1.564, 0.6, 0]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelRight_2"
            position={[1.664, 0.6, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelRight_3"
            position={[1.734, 0.6, 0]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              name="SolarPanelLeft1"
              geometry={nodes.SolarPanelLeft1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1_1"
              geometry={nodes.SolarPanelLeft1_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelLeft_5"
            position={[-1.8, 0.6, -1.27]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              name="SolarPanelLeft1003"
              geometry={nodes.SolarPanelLeft1003.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1003_1"
              geometry={nodes.SolarPanelLeft1003_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelRight_5"
            position={[1.664, 0.6, -1.27]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              name="SolarPanelLeft1003"
              geometry={nodes.SolarPanelLeft1003.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1003_1"
              geometry={nodes.SolarPanelLeft1003_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelLeft_4"
            position={[-1.81, 0.6, 1.27]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              name="SolarPanelLeft1004"
              geometry={nodes.SolarPanelLeft1004.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1004_1"
              geometry={nodes.SolarPanelLeft1004_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <group
            name="SolarPanelRight_4"
            position={[1.684, 0.6, 1.27]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              name="SolarPanelLeft1004"
              geometry={nodes.SolarPanelLeft1004.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="SolarPanelLeft1004_1"
              geometry={nodes.SolarPanelLeft1004_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials.PaletteMaterial002}
            position={[-0.031, 3.095, 0.548]}
            scale={[1.537, 0.946, 1.537]}
          />
          <group
            name="Icosphere"
            position={[-0.331, 3.22, 0.558]}
            scale={[2.134, 1.48, 2.078]}
          >
            <mesh
              name="Icosphere_1"
              geometry={nodes.Icosphere_1.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="Icosphere_2"
              geometry={nodes.Icosphere_2.geometry}
              material={materials.FoilMaterial}
            />
          </group>
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials.PaletteMaterial001}
            position={[-1.409, 5.399, -1.365]}
            scale={[0.05, 0.75, 0.05]}
          />
          <mesh
            name="PanelFrameLeft"
            geometry={nodes.PanelFrameLeft.geometry}
            material={materials.aluminium}
            position={[-1.67, 2.2, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.03, 0.015, 1.26]}
          />
          <mesh
            name="PanelFrameRight"
            geometry={nodes.PanelFrameRight.geometry}
            material={materials.aluminium}
            position={[1.534, 2.2, 0]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[-0.03, -0.015, -1.26]}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.AlumFoilBack}
            position={[-0.084, 3.357, -1.092]}
            scale={[1.468, 1.656, 1.469]}
          />
        </FactsModalTrigger>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/cruise-orbiter-transformed.glb');
