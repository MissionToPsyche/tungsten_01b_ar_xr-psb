/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/launch-text.gltf -tT -o launch-text.tsx -r /assets/models 
Files: ./public/assets/models/launch-text.gltf [5.95KB] > launch-text-transformed.glb [18.12KB] (-205%)
Author: ajd6735 (https://sketchfab.com/ajd6735)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/launch-scene-text-caf54a5aed5b47468085f3aaeb2a4e81
Title: Launch-scene-text
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_8: THREE.Mesh;
  };
  materials: {
    M_03___Default: THREE.MeshStandardMaterial;
    M_08___Default: THREE.MeshStandardMaterial;
  };
};

export function LaunchSceneName(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/launch-scene-name-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.M_03___Default}
        position={[0.989, -1.696, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.M_08___Default}
        position={[0.992, -1.693, -0.115]}
        scale={0.025}
      />
    </group>
  );
}

//useGLTF.preload('/assets/models/launch-scene-name-transformed.glb');
