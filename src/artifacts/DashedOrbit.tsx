/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/orbit-dashed.gltf -tT -o DashedOrbit.tsx -r /assets/models --keepgroups 
Files: ./public/assets/models/orbit-dashed.gltf [40.96KB] > orbit-dashed-transformed.glb [3.14KB] (92%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    SignalTransmMaterial: THREE.MeshStandardMaterial;
  };
};

export function DashedOrbit(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/orbit-dashed-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.SignalTransmMaterial}
          position={[0, 0, 0]}
          scale={[5, 0.7, 0.2]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/orbit-dashed-transformed.glb');