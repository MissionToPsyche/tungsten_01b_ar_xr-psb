import { useMemo, useRef, useState } from 'react';
import { Color, InstancedMesh, Object3D } from 'three';
import { RootState, useFrame } from '@react-three/fiber';
import { Particle } from './particle.ts';
import { ParticleSystemState } from './particle-system-state.ts';
import updateMeshInstanceColor from './utils/update-mesh-instance-color.ts';

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

  const dummyObj = useMemo(() => new Object3D(), []);
  const dummyColor = useMemo(() => new Color(), []);

  useFrame((rootState, delta) => {
    if (!mesh.current) {
      return;
    }

    let colorNeedsUpdate = false;

    particles.forEach((particle, index) => {
      if (!mesh.current) {
        return;
      }

      onParticleFrame(particle, { time }, rootState);
      const { position, meshRotation, meshScale } = particle;

      dummyObj.position.copy(position);
      dummyObj.rotation.copy(meshRotation);
      dummyObj.scale.copy(meshScale);

      dummyObj.updateMatrix();
      mesh.current.setMatrixAt(index, dummyObj.matrix);

      if (updateMeshInstanceColor(particle, mesh.current, index, dummyColor)) {
        colorNeedsUpdate = true;
      }

      particle.timeAlive += delta;
    });

    mesh.current.instanceMatrix.needsUpdate = true;

    // Eslint bug, it thinks colorNeedsUpdate is always falsy
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (colorNeedsUpdate && mesh.current.instanceColor) {
      mesh.current.instanceColor.needsUpdate = true;
    }

    setTime(time + delta);
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} {...props} />
  );
};

export default ParticleSystem;
