import React, { useMemo } from 'react';
import { AdditiveBlending, Color, DoubleSide } from 'three';
import ParticleSystem from '../../ParticleSystem.tsx';
import onParticleInit from './on-particle-init.ts';
import getOnParticleFrame from './get-on-particle-frame.ts';

const ThrusterParticleSystem: React.FC<
  JSX.IntrinsicElements['instancedMesh'] & {
    particleStartColor: Color;
    particleEndColor: Color;
    count: number;
  }
> = ({ particleStartColor, particleEndColor, count, ...props }) => {
  const onParticleFrame = useMemo(
    () => getOnParticleFrame(particleStartColor, particleEndColor),
    [particleEndColor, particleStartColor]
  );

  return (
    <ParticleSystem
      count={count}
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
};

export default ThrusterParticleSystem;
