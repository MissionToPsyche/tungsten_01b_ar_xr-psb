import ParticleSystem from '../../ParticleSystem.tsx';
import { AdditiveBlending, DoubleSide } from 'three';
import { useTexture } from '@react-three/drei';
import onParticleInit from './on-particle-init.ts';
import onParticleFrame from './on-particle-frame.ts';

/**
 * A particle system that produces smoke.
 * @param props Props for the underlying instance mesh.
 */
const SmokeParticleSystem = (props: JSX.IntrinsicElements['instancedMesh']) => {
  const smokeTexture = useTexture('/assets/images/smoke.png');

  return (
    <ParticleSystem
      count={50}
      onParticleInit={onParticleInit}
      onParticleFrame={onParticleFrame}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial
        map={smokeTexture}
        transparent
        opacity={0.5}
        blending={AdditiveBlending}
        depthWrite={false}
        side={DoubleSide}
      />
    </ParticleSystem>
  );
};

export default SmokeParticleSystem;
