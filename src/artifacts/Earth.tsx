/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/earth.gltf -tT -o Earth.tsx -r /assets/models 
Files: ./public/assets/models/earth.gltf [1.43MB] > earth-transformed.glb [142.44KB] (90%)
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Earth: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

const rotationSpeed = 0.03;

export function Earth(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF(
    '/assets/models/earth-transformed.glb'
  ) as GLTFResult;
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current == null) {
      return;
    }
    meshRef.current.rotation.y += -(delta * rotationSpeed);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, 0, 0]}>
        <mesh
          ref={meshRef}
          name="Earth"
          geometry={nodes.Earth.geometry}
          material={materials['Material.001']}
          rotation={[0, 0.8, 0.2]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/earth-transformed.glb');
