/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/untitled.gltf -tT -o P.tsx -r /assets/models 
Files: ./public/assets/models/untitled.gltf [1.19KB] > untitled-transformed.glb [386.18KB] (-32352%)
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    PSYCHE_20170116_DEC: THREE.Mesh;
  };
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial;
  };
};

export function Psyche(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/psyche-transformed.glb'
  ) as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current == null) {
      return;
    }
    groupRef.current.rotation.y -= delta * 0.08;
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh
        geometry={nodes.PSYCHE_20170116_DEC.geometry}
        material={materials['Material.003']}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/psyche-transformed.glb');
