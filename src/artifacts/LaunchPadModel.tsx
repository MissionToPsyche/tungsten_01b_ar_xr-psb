/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/l-p.gltf -tT -o l-p.tsx -r /assets/models 
Files: ./public/assets/models/l-p.gltf [9.75KB] > l-p-transformed.glb [339.69KB] (-3384%)
Author: ajd6735 (https://sketchfab.com/ajd6735)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lp-4511516a66f24598871f319d21ba38d2
Title: LP
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
  };
  materials: {
    metal: THREE.MeshStandardMaterial;
    concrete: THREE.MeshDistanceMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

export function LaunchPadModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/launch-pad-model-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.metal}
        position={[0, -0.591, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.026, 0.026, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.concrete}
        position={[0.687, 0.801, -0.022]}
        scale={[11, 1.2, 11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Material}
        position={[4.134, 2.97, -0.022]}
        scale={[3.071, 1.06, 2.161]}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/launch-pad-model-transformed.glb');
