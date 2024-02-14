import { useEffect, useMemo, useState } from 'react';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import { Amplifier } from '../artifacts/Amplifier';
import SoundParticleSystem from '../common/particle/systems/sound/SoundParticleSystem';
import { Euler } from 'three';
import degreesToRadians from '../common/utils/degrees-to-radians';
import { animated, config, useSpring } from '@react-spring/three';
import useAudio from '../audio/use-audio';
import RenderIf from '../common/components/RenderIf';

const initialAmpPositionRight = [20, 7, -3];
const initialAmpPositionLeft = [-20, 7, -3];
const initialAmpRotationRight = new Euler(0, 0, 0);
const initialAmpRotationLeft = new Euler(0, 0, 0);
const targetAmpPositionRight = [5, 7, -3];
const targetAmpPositionLeft = [-5, 7, -3];
const targetAmpRotationLeft = new Euler(
  0,
  degreesToRadians(-50),
  degreesToRadians(-10)
);
const targetAmpRotationRight = new Euler(
  0,
  degreesToRadians(-125),
  degreesToRadians(-10)
);
const soundFiles = ['sounds/jazz.wav', 'sounds/jazz1.wav'];

const AcousticTestingAnimation: React.FC = () => {
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [showOnScreen, setShowOnScreen] = useState(false);
  const { isAnimationActive, stopAnimation } = useAnimation();
  const { loadAudio, stopAudio } = useAudio();

  const animationActive = useMemo(() => {
    return isAnimationActive(AnimationName.ACOUSTIC_TESTING);
  }, [isAnimationActive]);

  // Positioning for right amplifier
  const { position: rightPosition, rotation: rightRotation } = useSpring({
    position: showOnScreen ? targetAmpPositionRight : initialAmpPositionRight,
    rotation: showOnScreen ? targetAmpRotationRight : initialAmpRotationRight,
    config: config.gentle,
    onRest: () => {
      if (showOnScreen) {
        const ind = Math.floor(Math.random() * soundFiles.length);
        loadAudio(soundFiles[ind], true);
        setParticlesVisible(true);
      }
    }
  });

  // Left amplifier
  const { position: leftPosition, rotation: leftRotation } = useSpring({
    position: showOnScreen ? targetAmpPositionLeft : initialAmpPositionLeft,
    rotation: showOnScreen ? targetAmpRotationLeft : initialAmpRotationLeft,
    config: config.gentle
  });

  useEffect(() => {
    if (!animationActive) {
      return;
    }

    if (!showOnScreen) {
      loadAudio('sounds/whoosh.mp3', true);
      setShowOnScreen(true);
    }

    setTimeout(() => {
      loadAudio('sounds/whoosh.mp3', true);
      setShowOnScreen(false);
      setParticlesVisible(false);
    }, 5000);

    setTimeout(() => {
      stopAudio();
      stopAnimation(AnimationName.ACOUSTIC_TESTING);
    }, 7000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationActive]);

  return (
    <>
      <animated.group
        position={rightPosition as never}
        rotation={rightRotation}
      >
        <RenderIf shouldRender={animationActive}>
          <Amplifier scale={5} />
        </RenderIf>
      </animated.group>
      <animated.group position={leftPosition as never} rotation={leftRotation}>
        <RenderIf shouldRender={animationActive}>
          <Amplifier scale={5} />
        </RenderIf>
      </animated.group>
      <SoundParticleSystem visible={particlesVisible} position={[4, 7, -2]} />
      <SoundParticleSystem visible={particlesVisible} position={[-4, 7, -2]} />
    </>
  );
};
export default AcousticTestingAnimation;
