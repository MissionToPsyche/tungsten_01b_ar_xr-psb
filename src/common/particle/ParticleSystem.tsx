import { useMemo, useRef, useState } from 'react';
import { InstancedMesh, Object3D } from 'three';
import { RootState, useFrame } from '@react-three/fiber';
import { Particle } from './particle.ts';
import { ParticleSystemState } from './particle-system-state.ts';

/**
 * Function that initializes a particle.
 */
export type OnParticleInitFn = () => Particle;

/**
 * Function that mutates a particle, called every render frame.
 */
export type OnParticleFrameFn = (
  // The particle to mutate.
  particle: Particle,
  // The current state of the particle system.
  systemState: ParticleSystemState,
  // The current state of three
  rootState: RootState
) => void;

/**
 * A configurable particle system.
 * @param count The number of particles in the system.
 * @param onParticleInit Particle initialization function.
 * @param onParticleFrame Particle frame function.
 * @param props Props for the instance mesh.
 */
const ParticleSystem = ({
  count,
  onParticleInit,
  onParticleFrame,
  ...props
}: JSX.IntrinsicElements['instancedMesh'] & {
  count: number;
  onParticleInit: OnParticleInitFn;
  onParticleFrame: OnParticleFrameFn;
}) => {
  const mesh = useRef<InstancedMesh | null>(null);
  const [time, setTime] = useState(0);

  const particles: Particle[] = useMemo(() => {
    const tempParticles = [];

    for (let i = 0; i < count; i++) {
      const particle = onParticleInit();
      tempParticles.push(particle);
    }

    return tempParticles;
  }, [count, onParticleInit]);

  const dummy = useMemo(() => new Object3D(), []);

  useFrame((rootState, delta) => {
    if (!mesh.current) {
      return;
    }

    particles.forEach((particle, index) => {
      if (!mesh.current) {
        return;
      }

      onParticleFrame(particle, { time }, rootState);
      const { position, meshRotation, meshScale } = particle;

      dummy.position.copy(position);
      dummy.rotation.copy(meshRotation);
      dummy.scale.copy(meshScale);

      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);

      particle.timeAlive += delta;
    });

    mesh.current.instanceMatrix.needsUpdate = true;

    setTime(time + delta);
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} {...props} />
  );
};

export default ParticleSystem;
