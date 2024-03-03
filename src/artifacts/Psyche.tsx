import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    PSYCHE_20170116_DEC001_1: THREE.Mesh;
    PSYCHE_20170116_DEC001_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

// type ActionName = 'psycheSpin'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Psyche(props: JSX.IntrinsicElements['group']) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    '/assets/models/psyche-transformed.glb'
  ) as GLTFResult;

  useFrame((_, delta) => {
    if (groupRef.current == null) {
      return;
    }
    groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="PSYCHE_20170116_DEC001"
          position={[0, 0, 0]}
          scale={[0.998, 0.999, 0.979]}
        >
          <mesh
            name="PSYCHE_20170116_DEC001_1"
            geometry={nodes.PSYCHE_20170116_DEC001_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="PSYCHE_20170116_DEC001_2"
            geometry={nodes.PSYCHE_20170116_DEC001_2.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/psyche-transformed.glb');
