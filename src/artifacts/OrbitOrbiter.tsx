/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/orbit-orbiter.gltf -tT -o OrbitOrbiter.tsx -r /assets/models --keepgroups --keepmeshes 
Files: ./public/assets/models/orbit-orbiter.gltf [35.3MB] > orbit-orbiter-transformed.glb [3.04MB] (91%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    orbiter4: THREE.Mesh;
    SolarPanelLeft1003: THREE.Mesh;
    SolarPanelLeft1003_1: THREE.Mesh;
    orbiter001: THREE.Mesh;
    orbiter002: THREE.Mesh;
    orbiter003: THREE.Mesh;
    orbiter005: THREE.Mesh;
    orbiter006: THREE.Mesh;
  };
  materials: {
    FoilMaterial: THREE.MeshStandardMaterial;
    aluminium: THREE.MeshStandardMaterial;
    Panel_Material: THREE.MeshStandardMaterial;
    M_01___Default: THREE.MeshStandardMaterial;
    Thruster_Material: THREE.MeshStandardMaterial;
    SignalTransmMaterial: THREE.MeshStandardMaterial;
  };
};

export function OrbitOrbiter(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/orbit-orbiter-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.orbiter4.geometry}
          material={materials.FoilMaterial}
          position={[0, -0.28, 0]}
          scale={[0.15, 0.005, 0.15]}
        />
        <group
          position={[-0.031, 0.031, -0.001]}
          rotation={[-1, 0, 0]}
          scale={[-0.005, -0.005, -0.003]}
        >
          <mesh
            geometry={nodes.SolarPanelLeft1003.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.SolarPanelLeft1003_1.geometry}
            material={materials.Panel_Material}
          />
        </group>
        <mesh
          geometry={nodes.orbiter001.geometry}
          material={materials.M_01___Default}
          position={[0, -0.28, 0]}
          scale={[0.15, 0.005, 0.15]}
        />
        <mesh
          geometry={nodes.orbiter002.geometry}
          material={materials.Thruster_Material}
          position={[0, -0.28, 0]}
          scale={[0.15, 0.005, 0.15]}
        />
        <mesh
          geometry={nodes.orbiter003.geometry}
          material={materials.SignalTransmMaterial}
          position={[0, -0.28, 0]}
          scale={[0.15, 0.005, 0.15]}
        />
        <mesh
          geometry={nodes.orbiter005.geometry}
          material={materials.FoilMaterial}
          position={[0, -0.28, 0]}
          scale={[0.15, 0.005, 0.15]}
        />
        <mesh
          geometry={nodes.orbiter006.geometry}
          material={materials.FoilMaterial}
          position={[0.102, -0.28, 0.107]}
          rotation={[Math.PI, -1.396, Math.PI]}
          scale={[0.15, 0.005, 0.15]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/orbit-orbiter-transformed.glb');
