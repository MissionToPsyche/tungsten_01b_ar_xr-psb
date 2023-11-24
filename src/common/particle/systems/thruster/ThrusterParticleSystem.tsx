import React from 'react';
import { AdditiveBlending, DoubleSide } from 'three';
import ParticleSystem from '../../ParticleSystem.tsx';
import onParticleInit from './on-particle-init.ts';
import onParticleFrame from './on-particle-frame.ts';

const ThrusterParticleSystem: React.FC<
  JSX.IntrinsicElements['instancedMesh']
> = (props) => (
  <ParticleSystem
    count={200}
    onParticleInit={onParticleInit}
    onParticleFrame={onParticleFrame}
    {...props}
  >
    <planeGeometry />
    <meshBasicMaterial
      transparent
      opacity={0.5}
      blending={AdditiveBlending}
      depthWrite={false}
      side={DoubleSide}
    />
  </ParticleSystem>
);

export default ThrusterParticleSystem;
