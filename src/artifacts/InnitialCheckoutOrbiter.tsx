/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/pack-orbiter.gltf -tT -o PackOrbiter.tsx -r /assets/models --keepgroups --keepmeshes 
Files: ./public/assets/models/pack-orbiter.gltf [24.98MB] > pack-orbiter-transformed.glb [1.97MB] (92%)
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import ExplodeElement from '../common/explode/ExplodeElement';

type GLTFResult = GLTF & {
  nodes: {
    SolarPanelLeft1010: THREE.Mesh;
    SolarPanelLeft1010_1: THREE.Mesh;
    Icosphere: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Icosphere001: THREE.Mesh;
    Cone001: THREE.Mesh;
    Object_0002: THREE.Mesh;
    ['psyche-text_baseColor_1']: THREE.Mesh;
    ['psyche-text_baseColor_2']: THREE.Mesh;
    ['psyche-text_baseColor_3']: THREE.Mesh;
    ['psyche-text_baseColor_4']: THREE.Mesh;
    PanelFrameLeft: THREE.Mesh;
    Cube: THREE.Mesh;
    DSOC_Box: THREE.Mesh;
    Magnetometer02001: THREE.Mesh;
    _NeutronSpectrometer001: THREE.Mesh;
    Obj_Cylinder001: THREE.Mesh;
    Obj_Cylinder001_1: THREE.Mesh;
    ThrusterBackPart1: THREE.Mesh;
    ThrusterBackPart1001: THREE.Mesh;
    ThrusterBackPart3: THREE.Mesh;
    ThrusterBackPart3_1: THREE.Mesh;
  };
  materials: {
    Panel_Material: THREE.MeshStandardMaterial;
    FoilMaterial: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    ['psyche-text_baseColor']: THREE.MeshStandardMaterial;
    ['NASA-logo_baseColor']: THREE.MeshStandardMaterial;
    ['psyche-logo_baseColor']: THREE.MeshStandardMaterial;
    AlumFoilBack: THREE.MeshStandardMaterial;
  };
};

export function InnitialCheckoutOrbiter(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    '/assets/models/pack-orbiter-transformed.glb'
  ) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[2.9, -7.1, -2.5]}
          explodedRotation={[0, 0, 1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelRight_5"
            position={[7.7, 0.643, 2.5]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[2.9, -7.1, 2.5]}
          explodedRotation={[0, 0, 1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelRight_4"
            position={[7.7, 0.643, -2.5]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[1.67, 10.25, 0]}
          explodedRotation={[0, 0, -1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelRight_3"
            position={[10.9, 0.653, 0.004]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[2.9, -7.1, 0]}
          explodedRotation={[0, 0, 1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelRight_2"
            position={[7.7, 0.643, 0.004]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0.6, 3.6, 0]}
          explodedRotation={[0, 0, -1]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelRight_1"
            position={[4.5, 0.67, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.025, -0.025, -0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-3, -7, -2.5]}
          explodedRotation={[0, 0, -1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelLeft_5"
            position={[-7.8, 0.67, 2.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-3, -7, 2.5]}
          explodedRotation={[0, 0, -1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelLeft_4"
            position={[-7.8, 0.67, -2.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-1.75, 10.5, 0]}
          explodedRotation={[0, 0, 1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelLeft_3"
            position={[-11, 0.67, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-3, -7, 0]}
          explodedRotation={[0, 0, -1.2]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelLeft_2"
            position={[-7.8, 0.67, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-0.6, 3.9, 0]}
          explodedRotation={[0, 0, 1]}
          unExplodeDelay={200}
        >
          <group
            name="SolarPanelLeft_1"
            position={[-4.7, 0.67, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.025, 0.025, 0.015]}
          >
            <mesh
              geometry={nodes.SolarPanelLeft1010.geometry}
              material={materials.AlumFoilBack}
            />
            <mesh
              geometry={nodes.SolarPanelLeft1010_1.geometry}
              material={materials.Panel_Material}
            />
          </group>
        </ExplodeElement>
        <mesh
          name="Icosphere"
          geometry={nodes.Icosphere.geometry}
          material={materials.AlumFoilBack}
          position={[-0.331, 3.264, 0.558]}
          scale={[2.134, 1.48, 2.078]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials.AlumFoilBack}
          position={[-1.409, 5.399, -1.365]}
          scale={[0.05, 0.75, 0.05]}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder.geometry}
          material={materials.AlumFoilBack}
          position={[1.297, 4.861, -1.365]}
          scale={[0.05, 0.75, 0.05]}
        />
        <mesh
          name="Icosphere001"
          geometry={nodes.Icosphere001.geometry}
          material={materials.AlumFoilBack}
          position={[-0.331, 3.264, 0.558]}
          scale={[2.134, 1.48, 2.078]}
        />
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-1, -1, 0]}
          explodedRotation={[0, 0, -0.75]}
          unExplodeDelay={200}
        >
          <mesh
            name="PanelFrameLeft"
            geometry={nodes.PanelFrameLeft.geometry}
            material={materials.AlumFoilBack}
            position={[-1.692, 0.7, 0.004]}
            rotation={[0, 0, 0]}
            scale={[0.03, 0.015, 1.26]}
          />
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[1, -1, 0]}
          explodedRotation={[0, 0, 0.75]}
          unExplodeDelay={200}
        >
          <mesh
            name="PanelFrameRight"
            geometry={nodes.PanelFrameLeft.geometry}
            material={materials.AlumFoilBack}
            position={[1.506, 0.7, 0.004]}
            rotation={[0, 0, 0]}
            scale={[-0.03, -0.015, -1.26]}
          />
        </ExplodeElement>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.AlumFoilBack}
          position={[-0.084, 3.357, -1.092]}
          scale={[1.468, 1.656, 1.469]}
        />
        <mesh
          name="DSOC_Box"
          geometry={nodes.DSOC_Box.geometry}
          material={materials.FoilMaterial}
          position={[-0.981, 1.278, 1.415]}
          rotation={[0.402, 0.762, 0.04]}
          scale={[0.051, 0.059, 0.051]}
        />
        <mesh
          name="Magnetometer02001"
          geometry={nodes.Magnetometer02001.geometry}
          material={materials.PaletteMaterial001}
          position={[1.291, 5.427, -1.422]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.062, 0.062, 0.052]}
        />
        <mesh
          name="_NeutronSpectrometer"
          geometry={nodes.Obj_Cylinder001_1.geometry}
          material={materials.PaletteMaterial001}
          position={[-1.414, 5.849, -1.528]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.03, 0.02, 0.012]}
        />
        <mesh
          name="_NeutronSpectrometer001"
          geometry={nodes._NeutronSpectrometer001.geometry}
          material={materials.PaletteMaterial001}
          position={[-1.414, 5.895, -1.427]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.05, 0.077, 0.064]}
        />
        <group
          name="SIgnalCylinder"
          position={[-0.845, 2.788, 2.202]}
          rotation={[-1.172, 0, Math.PI / 4]}
          scale={0.041}
        >
          <mesh
            name="Obj_Cylinder001"
            geometry={nodes.Obj_Cylinder001.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Obj_Cylinder001_1"
            geometry={nodes.Obj_Cylinder001_1.geometry}
            material={materials.AlumFoilBack}
          />
        </group>
        <mesh
          name="ThrusterBackPart1"
          geometry={nodes.ThrusterBackPart1.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.115, -0.373, -1.54]}
          scale={[-0.034, 0.034, 0.034]}
        />
        <mesh
          name="ThrusterBackPart1001"
          geometry={nodes.ThrusterBackPart1001.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.113, -0.373, 1.613]}
          rotation={[-Math.PI, 0, Math.PI]}
          scale={[-0.034, 0.034, 0.034]}
        />
        <group
          name="ThrusterBack"
          position={[-0.113, -0.5, -2.5]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-0.034, 0.034, 0.034]}
        >
          <mesh
            name="ThrusterBackPart3"
            geometry={nodes.ThrusterBackPart3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="ThrusterBackPart3_1"
            geometry={nodes.ThrusterBackPart3_1.geometry}
            material={materials.AlumFoilBack}
          />
        </group>
        <group
          name="ThrusterFront001"
          position={[-0.115, -0.5, 2.6]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[-0.034, 0.034, 0.034]}
        >
          <mesh
            name="ThrusterBackPart3"
            geometry={nodes.ThrusterBackPart3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="ThrusterBackPart3_1"
            geometry={nodes.ThrusterBackPart3_1.geometry}
            material={materials.AlumFoilBack}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/pack-orbiter-transformed.glb');