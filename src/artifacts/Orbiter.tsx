/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/assets/models/orbiter.gltf -tT -o Orbiter.tsx -r /assets/models --keepmeshes --keepmaterials --shadows 
Files: ./public/assets/models/orbiter.gltf [65.82KB] > orbiter-transformed.glb [474.64KB] (-621%)
Author: ajd6735 (https://sketchfab.com/ajd6735)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/psyche-orbiter-6c79ce3f22c8427987f5a9bbfd106236
Title: Psyche Orbiter
*/

import * as THREE from 'three';
import { Box, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import ExplodeElement from '../common/explode/ExplodeElement.tsx';
import degreesToRadians from '../common/utils/degrees-to-radians.ts';
import FactsModalTrigger from '../facts/FactsModalTrigger.tsx';

type GLTFResult = GLTF & {
  nodes: {
    Object_14: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_76: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_0: THREE.Mesh;
  };
  materials: {
    Box_Material: THREE.MeshStandardMaterial;
    ['Thruster_Material.001']: THREE.MeshStandardMaterial;
    M_03___Default: THREE.MeshStandardMaterial;
    SolarPanelFrrame_Material: THREE.MeshStandardMaterial;
    SolarPanel_Material: THREE.MeshStandardMaterial;
    fallback_Material: THREE.MeshStandardMaterial;
    BlackPlastic_Material: THREE.MeshStandardMaterial;
    Thruster_Material: THREE.MeshStandardMaterial;
    M_15___Default: THREE.MeshStandardMaterial;
  };
};

export function Orbiter(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/models/orbiter-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {/*Bottom Stuff*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, -1.5, 0]}
        explodedRotation={[0, 0, 0]}
        unExplodeDelay={200}
      >
        {/* interior cylinder 1*/}
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials['Thruster_Material.001']}
          position={[0, 1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        {/* interior cylinder 2*/}
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.SolarPanelFrrame_Material}
          position={[0, 0.466, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        {/* interior cylinder 3*/}
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials.SolarPanelFrrame_Material}
          position={[0, 2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, -1, 0]}
          explodedRotation={[0, 0, 0]}
          unExplodeDelay={200}
        >
          {/* exterior bottom cylinder 2*/}
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.SolarPanelFrrame_Material}
            position={[0, -0.154, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.025}
          />
        </ExplodeElement>
        <ExplodeElement
          startPosition={[0, 0, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, -1.8, 0]}
          explodedRotation={[0, 0, 0]}
        >
          {/* exterior gear 2*/}
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials['Thruster_Material.001']}
            position={[0, -0.053, -0.003]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.04, 0.04, 0.025]}
          />
        </ExplodeElement>
      </ExplodeElement>
      {/*Right Stuff*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[1.5, 0, 0]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={150}
      >
        {/* right side pannels*/}
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.SolarPanel_Material}
          position={[1.26, 1.254, 0.495]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.025}
        />
      </ExplodeElement>
      {/*Left Stuff*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[-1.5, 0, 0]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={150}
      >
        {/* left side side pannels*/}
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials.SolarPanel_Material}
          position={[-1.26, 1.254, 0.495]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.025}
        />
      </ExplodeElement>
      {/*Front Stuff*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 0, 2.5]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={100}
        unExplodeDelay={100}
      >
        {/*Front Square*/}
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.M_03___Default}
          position={[0, 1.733, 1.2]}
          rotation={[0.387, 0, 0]}
          scale={0.025}
        />
        {/*Front Thruster*/}
        <group>
          <mesh
            geometry={nodes.Object_63.geometry}
            material={materials['Thruster_Material.001']}
            position={[0.037, 0.157, 1.95]}
            rotation={[-1.789, 0, -Math.PI]}
            scale={[-0.025, 0.025, 0.025]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.Thruster_Material}
            position={[0.037, 0.157, 1.95]}
            rotation={[-1.789, 0, -Math.PI]}
            scale={[-0.025, 0.025, 0.025]}
          />
        </group>
      </ExplodeElement>
      {/*Bars*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 2.5, -2.5]}
        explodedRotation={[0, 0, 0]}
      >
        {(isExploded) => (
          <>
            {/*Magnometer Cylinder Bar*/}
            <mesh
              geometry={nodes.Object_48.geometry}
              material={materials.fallback_Material}
              position={[0.907, 2.303, -1.078]}
              rotation={[-Math.PI / 2, -0.963, -Math.PI]}
              scale={[-0.025, 0.025, 0.025]}
            />
            <FactsModalTrigger factName="spectrometer" disable={!isExploded}>
              {/*spectrometer*/}
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_51.geometry}
                material={materials.BlackPlastic_Material}
                position={[-1.018, 3.898, -1.084]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.025}
              />
            </FactsModalTrigger>
            <FactsModalTrigger factName="magnetometer" disable={!isExploded}>
              {/*magnetometer*/}
              <group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.BlackPlastic_Material}
                  position={[0.904, 3.994, -1.082]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={0.025}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.BlackPlastic_Material}
                  position={[0.904, 3.655, -1.082]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={0.025}
                />
              </group>
            </FactsModalTrigger>
            {/*Neutron Spectrometer*/}
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_70.geometry}
                material={materials.Box_Material}
                position={[-1.014, 4.416, -1.086]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.025}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_73.geometry}
                material={materials.M_15___Default}
                position={[-1.014, 4.307, -1.148]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.025}
              />
            </group>
          </>
        )}
      </ExplodeElement>
      {/*Back Stuff*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 0, -2.5]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={100}
        unExplodeDelay={100}
      >
        {(isExploded) => (
          <>
            {/*Back Thrusters*/}
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_60.geometry}
                material={materials['Thruster_Material.001']}
                position={[0.037, 0.157, -1.95]}
                rotation={[-1.353, 0, 0]}
                scale={0.025}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_61.geometry}
                material={materials.Thruster_Material}
                position={[0.037, 0.157, -1.95]}
                rotation={[-1.353, 0, 0]}
                scale={0.025}
              />
            </group>
            <FactsModalTrigger
              factName="multiSpectralImager"
              disable={!isExploded}
            >
              {/*Neutron Spectrometer*/}
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_76.geometry}
                material={materials.M_15___Default}
                position={[0.074, 1.85, -1.3]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.025}
              />
            </FactsModalTrigger>
          </>
        )}
      </ExplodeElement>
      {/* Comms */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 2.5, 0]}
        explodedRotation={[0, degreesToRadians(180), 0]}
      >
        {(isExploded) => (
          <>
            <FactsModalTrigger factName="xBandRadio" disable={!isExploded}>
              {/*x-band radio*/}
              <group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.M_03___Default}
                  position={[-0.011, 2.286, 0.351]}
                  rotation={[-Math.PI / 2, 0, -0.325]}
                  scale={0.042}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.Box_Material}
                  position={[-0.011, 2.286, 0.351]}
                  rotation={[-Math.PI / 2, 0, -0.325]}
                  scale={0.042}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials['Thruster_Material.001']}
                  position={[-0.011, 2.286, 0.351]}
                  rotation={[-Math.PI / 2, 0, -0.325]}
                  scale={0.042}
                />
              </group>
            </FactsModalTrigger>
          </>
        )}
      </ExplodeElement>
      {/*Left Solar Panel*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[-2.5, 0, 0]}
        explodedRotation={[degreesToRadians(-150), 0, 0]}
        unExplodeDelay={600}
      >
        <group>
          <mesh
            geometry={nodes.Object_45.geometry}
            material={materials.SolarPanel_Material}
            position={[-4.4, 0.57, -0.008]}
            rotation={[-1.258, 0, 0]}
            scale={0.025}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials.Box_Material}
            position={[-4.4, 0.57, -0.008]}
            rotation={[-1.258, 0, 0]}
            scale={0.025}
          />
        </group>
      </ExplodeElement>

      {/*Right 2 Solar Panel*/}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[2.5, 0, 0]}
        explodedRotation={[degreesToRadians(-150), 0, 0]}
        unExplodeDelay={600}
      >
        <group>
          <mesh
            geometry={nodes.Object_45.geometry}
            material={materials.SolarPanel_Material}
            position={[4.4, 0.57, -0.008]}
            rotation={[-1.258, 0, 0]}
            scale={[-0.025, 0.025, 0.025]}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials.Box_Material}
            position={[4.4, 0.57, -0.008]}
            rotation={[-1.258, 0, 0]}
            scale={[-0.025, 0.025, 0.025]}
          />
        </group>
      </ExplodeElement>

      {/* back box */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 0, -2]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={400}
        unExplodeDelay={50}
      >
        <Box
          position={[0, 1, -1.2]}
          scale={[0.1, 2.5, 2.5]}
          material={materials.SolarPanelFrrame_Material}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        ></Box>
      </ExplodeElement>
      {/* right box */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[1.5, 0, 0]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={250}
        unExplodeDelay={50}
      >
        <Box
          position={[1.2, 0.95, 0]}
          scale={[0.1, 2.5, 2.5]}
          material={materials.SolarPanelFrrame_Material}
        ></Box>
      </ExplodeElement>
      {/* left box */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[-1.5, 0, 0]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={300}
        unExplodeDelay={50}
      >
        <Box
          position={[-1.2, 0.95, 0]}
          scale={[0.1, 2.5, 2.5]}
          material={materials.SolarPanelFrrame_Material}
          rotation={[Math.PI / 2, 0, 0]}
        ></Box>
      </ExplodeElement>
      {/* bottom box will not move */}
      <Box
        position={[0, -0.3, 0]}
        scale={[0.1, 2.5, 2.5]}
        material={materials.SolarPanelFrrame_Material}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      ></Box>
      {/* top box */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 2, 0]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={350}
        unExplodeDelay={50}
      >
        <Box
          position={[0, 2.2, 0]}
          scale={[0.1, 2.5, 2.5]}
          material={materials.SolarPanelFrrame_Material}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        ></Box>
      </ExplodeElement>
      {/* front box */}
      <ExplodeElement
        startPosition={[0, 0, 0]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 0, 2.2]}
        explodedRotation={[0, 0, 0]}
        explodeDelay={200}
        unExplodeDelay={150}
      >
        <Box
          position={[0, 1, 1.2]}
          scale={[0.1, 2.5, 2.5]}
          material={materials.SolarPanelFrrame_Material}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        ></Box>
      </ExplodeElement>
    </group>
  );
}

useGLTF.preload('/assets/models/orbiter-transformed.glb');
