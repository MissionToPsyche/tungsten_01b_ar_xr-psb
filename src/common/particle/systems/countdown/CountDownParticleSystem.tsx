import ParticleSystem from '../../ParticleSystem.tsx';
import { DoubleSide, Vector3 } from 'three';
import { useTexture } from '@react-three/drei';
import onParticleInit from '../countdown/on-particle-init-countdown.ts';

/**
 * A particle system that produces count down notes.
 * @param props Props for the underlying instance mesh.
 */
const CountDownParticleSystem = ({
  path,
  position,
  ...props
}: JSX.IntrinsicElements['instancedMesh'] & {
  path: string;
  position: Vector3;
}) => {
  const threeCountDown = useTexture(path);

  return (
    <ParticleSystem
      count={1}
      onParticleInit={onParticleInit}
      onParticleFrame={onParticleInit}
      position={position}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial
        map={threeCountDown}
        transparent
        opacity={1}
        depthWrite={false}
        side={DoubleSide}
      />
    </ParticleSystem>
  );
};

export default CountDownParticleSystem;
