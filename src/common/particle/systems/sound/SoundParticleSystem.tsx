import ParticleSystem from '../../ParticleSystem.tsx';
import { AdditiveBlending, DoubleSide } from 'three';
import { useTexture } from '@react-three/drei';
import onParticleInit from './on-particle-init.ts';
import onParticleFrame from './on-particle-frame.ts';

/**
 * A particle system that produces music notes.
 * @param props Props for the underlying instance mesh.
 */
const SoundParticleSystem = (props: JSX.IntrinsicElements['instancedMesh']) => {
  const musicNote = useTexture('/assets/images/eighth-note.png');

  return (
    <ParticleSystem
      count={4}
      onParticleInit={onParticleInit}
      onParticleFrame={onParticleFrame}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial
        map={musicNote}
        transparent
        blending={AdditiveBlending}
        opacity={1}
        depthWrite={false}
        side={DoubleSide}
      />
    </ParticleSystem>
  );
};

export default SoundParticleSystem;
