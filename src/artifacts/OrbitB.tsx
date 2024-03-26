/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/orbits_animated.gltf -tT -o Orbits.tsx -r /assets/models --keepgroups --keepmeshes 
Files: ./public/assets/models/orbits_animated.gltf [61.95MB] > orbits_animated-transformed.glb [7.76MB] (87%)
*/

import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import ModelSpinner from '../common/components/ModelSpinner';

type GLTFResult = GLTF & {
  nodes: {
    SolarPanelLeft1014: THREE.Mesh;
    SolarPanelLeft1014_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Cylinder001_3: THREE.Mesh;
    Cylinder001_4: THREE.Mesh;
    Cylinder001_5: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder005_2: THREE.Mesh;
    Cylinder005_3: THREE.Mesh;
    Cylinder005_4: THREE.Mesh;
    Cylinder005_5: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder003_1: THREE.Mesh;
    Cylinder003_2: THREE.Mesh;
    Cylinder003_3: THREE.Mesh;
    Cylinder003_4: THREE.Mesh;
    Cylinder003_5: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    Cylinder004_2: THREE.Mesh;
    Cylinder004_3: THREE.Mesh;
    Cylinder004_4: THREE.Mesh;
    Cylinder004_5: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    Panel_Material: THREE.MeshStandardMaterial;
    M_01___Default: THREE.MeshStandardMaterial;
    Thruster_Material: THREE.MeshStandardMaterial;
    SignalTransmMaterial: THREE.MeshStandardMaterial;
    FoilMaterial: THREE.MeshStandardMaterial;
    AlumFoilBack: THREE.MeshStandardMaterial;
  };
};

export function OrbitsTwo(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/orbits_animated-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.emptyThreeCircle?.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty3"
          position={[4.95, 1, -4.95]}
          rotation={[-2.457, -0.659, 2.034]}
        >
          <ModelSpinner speed={0.1} orientationY={true}>
            <group
              name="SolarPanel3"
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-0.005, -0.005, -0.003]}
            >
              <mesh
                name="SolarPanelLeft1014"
                geometry={nodes.SolarPanelLeft1014.geometry}
                material={materials.aluminium}
              />
              <mesh
                name="SolarPanelLeft1014_1"
                geometry={nodes.SolarPanelLeft1014_1.geometry}
                material={materials.Panel_Material}
              />
            </group>
            <group
              name="orbiter3"
              position={[0, -0.28, 0]}
              scale={[0.15, 0.005, 0.15]}
            >
              <mesh
                name="Cylinder003"
                geometry={nodes.Cylinder003.geometry}
                material={materials.M_01___Default}
              />
              <mesh
                name="Cylinder003_1"
                geometry={nodes.Cylinder003_1.geometry}
                material={materials.Thruster_Material}
              />
              <mesh
                name="Cylinder003_2"
                geometry={nodes.Cylinder003_2.geometry}
                material={materials.SignalTransmMaterial}
              />
              <mesh
                name="Cylinder003_3"
                geometry={nodes.Cylinder003_3.geometry}
                material={materials.FoilMaterial}
              />
              <mesh
                name="Cylinder003_4"
                geometry={nodes.Cylinder003_4.geometry}
                material={materials.aluminium}
              />
              <mesh
                name="Cylinder003_5"
                geometry={nodes.Cylinder003_5.geometry}
                material={materials.AlumFoilBack}
              />
            </group>
          </ModelSpinner>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/orbits_animated-transformed.glb');
