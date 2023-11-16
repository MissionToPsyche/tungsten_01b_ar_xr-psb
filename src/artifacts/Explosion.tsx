/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/Explosion.gltf -tT -o Explosion.tsx -r /assets/models 
Files: ./public/assets/models/Explosion.gltf [16.92KB] > Explosion-transformed.glb [6.85MB] (-40400%)
Author: saeed khalili (https://sketchfab.com/saeedkhalili.ir)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/explosion-as-solid-be45bff647324db5b12fec5f5556a621
Title: Explosion as Solid
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    Material__26: THREE.MeshBasicMaterial;
  };
};

export function Explosion(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/explosion-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Material__26}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.026}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/explosion-transformed.glb');