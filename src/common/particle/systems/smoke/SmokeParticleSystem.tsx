import ParticleSystem from '../../ParticleSystem.tsx';
import { AdditiveBlending } from 'three';
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
      count={200}
      onParticleInit={onParticleInit}
      onParticleFrame={onParticleFrame}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial
        map={smokeTexture}
        transparent
        opacity={0.025}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </ParticleSystem>
  );
};

export default SmokeParticleSystem;
