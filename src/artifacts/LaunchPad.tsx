/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./LaunchPad.gltf -tTks -o LaunchPad.tsx -r /assets/models 
Files: ./LaunchPad.gltf [191.63KB] > launch-pad-transformed.glb [8.87KB] (95%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import LightBulb from '../common/components/LightBulb.tsx';

type GLTFResult = GLTF & {
  nodes: {
    BasePad: THREE.Mesh;
    TowerMain: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cube007: THREE.InstancedMesh;
    Cube041: THREE.InstancedMesh;
  };
  materials: {
    BasePadMaterial: THREE.MeshStandardMaterial;
    TowerMaterial: THREE.MeshStandardMaterial;
    ScaffoldingMaterial: THREE.MeshStandardMaterial;
  };
};

export function LaunchPad(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/launch-pad-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <LightBulb
        position={[-2.175, 11.75, 0]}
        color="blue"
        intensity={0.2}
        radius={0.1}
      />
      <mesh
        name="BasePad"
        castShadow
        receiveShadow
        geometry={nodes.BasePad.geometry}
        material={materials.BasePadMaterial}
        position={[0, 0.998, 0]}
        scale={[6.016, 1.207, 6.016]}
      />
      <mesh
        name="TowerMain"
        castShadow
        receiveShadow
        geometry={nodes.TowerMain.geometry}
        material={materials.TowerMaterial}
        position={[-2.177, 2.092, 0]}
        scale={0.788}
      />
      <mesh
        name="Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.ScaffoldingMaterial}
        position={[-1.569, 1.097, 1.863]}
        scale={0.093}
      />
      <instancedMesh
        args={[nodes.Cube007.geometry, materials.TowerMaterial, 42]}
        name="Cube007"
        castShadow
        receiveShadow
        instanceMatrix={nodes.Cube007.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cube041.geometry, materials.ScaffoldingMaterial, 18]}
        name="Cube041"
        castShadow
        receiveShadow
        instanceMatrix={nodes.Cube041.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/launch-pad-transformed.glb');
