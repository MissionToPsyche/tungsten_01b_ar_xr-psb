/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/cruise-arrival-scene-name.gltf -tT -o CruiseName.tsx -r /assets/models --keepgroups --keepmeshes 
Files: ./public/assets/models/cruise-arrival-scene-name.gltf [6.26KB] > cruise-arrival-scene-name-transformed.glb [47.68KB] (-662%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    MissionLaunchText002: THREE.Mesh;
    Box004: THREE.Mesh;
    MissionLaunchText003: THREE.Mesh;
  };
  materials: {
    M_08___Default: THREE.MeshStandardMaterial;
    M_03___Default: THREE.MeshStandardMaterial;
  };
};

export function OrbitName(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/cruise-arrival-scene-name-transformed.glb'
  ) as GLTFResult;

  const minScaleFactor = 2;
  const maxScaleFactor = 2.3;
  const isMobile = window.innerWidth < 768;

  return (
    <group
      {...props}
      dispose={null}
      scale={isMobile ? minScaleFactor : maxScaleFactor}
      position={isMobile ? [-2, 10, -8] : [-1, 10, -8]}
    >
      <mesh
        geometry={nodes.MissionLaunchText002.geometry}
        material={materials.M_03___Default}
        position={[1.117, 3.221, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Box004.geometry}
        material={materials.M_08___Default}
        position={[0.992, 2.799, -0.115]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.MissionLaunchText003.geometry}
        material={materials.M_03___Default}
        position={[0.989, 2.338, 0]}
        scale={0.025}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/cruise-arrival-scene-name-transformed.glb');
