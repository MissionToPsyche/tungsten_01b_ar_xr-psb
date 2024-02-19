/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/earth.gltf -tT -o Earth.tsx -r /assets/models 
Files: ./public/assets/models/earth.gltf [1.43MB] > earth-transformed.glb [142.44KB] (90%)
*/

import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Earth: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

// type ActionName = 'rotateAction' | 'spinAction'

export function Earth(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/earth-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.rotateAction?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Earth"
          geometry={nodes.Earth.geometry}
          material={materials['Material.001']}
          rotation={[-0.338, -0.089, 0.247]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/tungsten_01b_ar_xr-psb/earth-transformed.glb');
