/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/psyche.gltf -tT -o Psyche.tsx -r /assets/models --keepgroups --keepmeshes 
Files: ./public/assets/models/psyche.gltf [56.82MB] > psyche-transformed.glb [4.92MB] (91%)
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PSYCHE_20170116_DEC: THREE.Mesh
    PSYCHE_20170116_DEC001: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Psyche(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/models/psyche-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.PSYCHE_20170116_DEC.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.PSYCHE_20170116_DEC001.geometry} material={materials['Material.001']} position={[-0.001, 0, -0.01]} scale={[0.999, 0.999, 0.989]} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/psyche-transformed.glb')
