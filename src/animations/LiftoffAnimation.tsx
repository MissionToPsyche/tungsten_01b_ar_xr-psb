import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Group, Vector3 } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import SmokeParticleSystem from '../common/particle/systems/smoke/SmokeParticleSystem';
import ThrusterParticleSystem from '../common/particle/systems/thruster/ThrusterParticleSystem';
import useSettings from '../settings/use-settings';
import RenderIf from '../common/components/RenderIf';
import { Image } from '@react-three/drei';

const thrusterStartingColor = new Color('#FFDD00');
const thrusterEndingColor = new Color('#FFF2BD');

/**
 * Liftoff animation for rocket
 */
const LiftoffAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const groupRef = useRef<Group>(null);
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);
  const { arEnabled } = useSettings();
  const [imageVisible, setImageVisible] = useState(false);
  const [currentCountDown, setCurrentCountDown] = useState(3);

  useFrame((state, delta) => {
    if (groupRef.current == null) {
      return;
    }

    if (isAnimationActive(AnimationName.LIFTOFF)) {
      setElapsed((prev) => prev + delta);

      if (elapsed >= 0.5) {
        setImageVisible(true);
        if (elapsed >= 0.5 && elapsed < 1.5) {
          // Delaying rocket's movement and displaying the particle system
          setCurrentCountDown(3);
        }

        if (elapsed >= 1.5 && elapsed < 2.5) {
          setCurrentCountDown(2);
        }

        if (elapsed >= 2.5 && elapsed < 4) {
          setCurrentCountDown(1);
        }
      }

      if (elapsed >= 4) {
        setImageVisible(false);

        if (elapsed >= 4 && elapsed <= 5) {
          groupRef.current.position.y += delta * elapsed;
        }

        if (elapsed >= 5 && elapsed <= 11 && !arEnabled) {
          if (elapsed <= 9) {
            state.camera.rotation.x += delta * 0.2;
          }
          groupRef.current.position.y += delta * elapsed;
        }

        if (elapsed >= 11) {
          setElapsed(0);
          stopAnimation(AnimationName.LIFTOFF);
        }
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <ThrusterParticleSystem
        position={[0.62, -4.4, 1]}
        visible={isAnimationActive(AnimationName.LIFTOFF)}
        particleStartColor={thrusterStartingColor}
        particleEndColor={thrusterEndingColor}
        count={200}
      />
      <SmokeParticleSystem
        visible={!isAnimationActive(AnimationName.LIFTOFF)}
        position={[0.75, -4.4, 1]}
      />
      <RenderIf shouldRender={imageVisible}>
        <Image
          url={`/assets/images/countdown_${currentCountDown}.png`}
          scale={4}
          position={new Vector3(4, 4, 4)}
        />
      </RenderIf>
      {children}
    </group>
  );
};

export default LiftoffAnimation;
