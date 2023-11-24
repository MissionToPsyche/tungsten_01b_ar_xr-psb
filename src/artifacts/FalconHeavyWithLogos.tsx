/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/falcon-heavy-with-logos.gltf -tT -o falcon-heavy-with-logos.tsx -r /assets/models 
Files: ./public/assets/models/falcon-heavy-with-logos.gltf [27.79KB] > falcon-heavy-with-logos-transformed.glb [1.15MB] (-4022%)
Author: ajd6735 (https://sketchfab.com/ajd6735)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/falcon-heavy-with-logos-c0a29703f0594b3a897e8adaec8d2ad1
Title: Falcon Heavy with logos
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useRef } from 'react';
import { Select } from '@react-three/postprocessing';
import { Mesh } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    ['American-flag']: THREE.MeshStandardMaterial;
    ['Falcon-Heavy-logo']: THREE.MeshStandardMaterial;
    ['NASA-logo']: THREE.MeshStandardMaterial;
    ['psyche-logo']: THREE.MeshStandardMaterial;
    ['psyche-text']: THREE.MeshStandardMaterial;
    ['spacex-logo']: THREE.MeshStandardMaterial;
  };
};

export function FalconHeavyWithLogos({
  outline,
  ...props
}: JSX.IntrinsicElements['group'] & { outline?: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF(
    '/assets/models/falcon-heavy-with-logos-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <Select enabled={outline}>
        <mesh
          ref={meshRef}
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          position={[-1.515, 22.667, -0.01]}
          rotation={[-Math.PI / 2, 0, -0.786]}
          scale={0.025}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.PaletteMaterial002}
          position={[-1.515, 22.667, -0.01]}
          rotation={[-Math.PI / 2, 0, -0.786]}
          scale={0.025}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials['American-flag']}
          position={[-1.527, 17.099, 0.649]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.263}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials['Falcon-Heavy-logo']}
          position={[-1.645, 17.831, 0.667]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials['NASA-logo']}
          position={[-1.494, 25.552, 1.022]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials['psyche-logo']}
          position={[-1.52, 24.565, 1.015]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials['psyche-text']}
          position={[-1.501, 23.953, 1.022]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.34}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials['spacex-logo']}
          position={[-1.368, 7.293, 0.718]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.621, 4.789, 4.789]}
        />
      </Select>
    </group>
  );
}

useGLTF.preload('/assets/models/falcon-heavy-with-logos-transformed.glb');
