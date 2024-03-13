/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/open-panels-date.gltf -tT -o OpenPanelsDate.tsx -r /assets/models --keepgroups 
Files: ./public/assets/models/open-panels-date.gltf [486.98KB] > open-panels-date-transformed.glb [43.32KB] (91%)
*/

import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder002001: THREE.Mesh;
    TextPlus013001: THREE.Mesh;
    TextPlus013001_1: THREE.Mesh;
    TextPlus013001_2: THREE.Mesh;
  };
  materials: {
    ['fallback Material.006']: THREE.MeshStandardMaterial;
    ['M_01___Default.005']: THREE.MeshPhysicalMaterial;
    ['fallback Material.007']: THREE.MeshStandardMaterial;
    ['TimelineBubblePlastic02.001']: THREE.MeshStandardMaterial;
  };
};

export function OpenPanelsDate(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/open-panels-date-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.SecondDateAction?.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cylinder002001"
          geometry={nodes.Cylinder002001.geometry}
          material={materials['fallback Material.006']}
          position={[43.36, 1.948, -0.413]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.006}
        />
        <group
          name="date"
          position={[43.271, 12.053, 0]}
          rotation={[0, -0.395, 0]}
          scale={[0.09, 0.11, 0.09]}
        >
          <mesh
            name="TextPlus013001"
            geometry={nodes.TextPlus013001.geometry}
            material={materials['M_01___Default.005']}
          />
          <mesh
            name="TextPlus013001_1"
            geometry={nodes.TextPlus013001_1.geometry}
            material={materials['fallback Material.007']}
          />
          <mesh
            name="TextPlus013001_2"
            geometry={nodes.TextPlus013001_2.geometry}
            material={materials['TimelineBubblePlastic02.001']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  '/assets/models/tungsten_01b_ar_xr-psb/open-panels-date-transformed.glb'
);