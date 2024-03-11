import { PropsWithChildren, useState } from 'react';
import AnimationContext from './animation-context';
import AnimationName from './types/animation-name';
import AnimationData from './types/animation-data';
import useAudio from '../audio/use-audio';

/**
 * Animation provider that manages the state of any animations within a scene.
 */
export const AnimationProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [registry, setRegistry] = useState<
    Record<AnimationName, AnimationData>
  >({} as Record<AnimationName, AnimationData>);
  const { loadAudio, stopAudio } = useAudio();

  /**
   * Retrieves the active state of the specified animation, if registered.
   * @param animationName The animation name to check the active state of.
   * @returns boolean indicating whether the animation is active.
   */
  const isAnimationActive = (animationName: AnimationName) => {
    // Check if registered but don't enforce since animations may
    // call this prior to registration
    if (isRegistered(animationName, false)) {
      return registry[animationName].active;
    }
    return false;
  };

  /**
   * Adds the specified animation to the registry
   * @param animationName The animation name to add to the registry
   * @param callback An optional callback to execute when the animation completes
   */
  const registerAnimation = (
    animationName: AnimationName,
    callback?: () => void,
    audio?: string
  ) => {
    // The scene manager detects transitions based on animation states,
    // so a BACK animation is implemented in each scene. Given that each
    // scene uses this same animation, we need to update the callback
    // so it will transition to the proper scene
    if (
      isRegistered(animationName, false) &&
      animationName == AnimationName.BACK &&
      registry[animationName].onComplete !== callback
    ) {
      setRegistry((reg) => ({
        ...reg,
        [animationName]: {
          ...reg[animationName],
          onComplete: callback
        }
      }));
      return;
    }
    // Verify the animation isn't already registered
    else if (isRegistered(animationName, false)) {
      return;
    }
    setRegistry((reg) => ({
      ...reg,
      [animationName]: {
        active: false,
        onComplete: callback,
        audioFile: audio
      }
    }));
  };

  /**
   * Starts the specified animation
   * @param animationName The name of the animation to start
   */
  const startAnimation = (animationName: AnimationName) => {
    if (isRegistered(animationName)) {
      const { [animationName]: animation } = registry;
      if (animation.audioFile) {
        loadAudio(animation.audioFile, true);
      }
      setRegistry((reg) => ({
        ...reg,
        [animationName]: {
          ...reg[animationName],
          active: true
        }
      }));
    }
  };

  /**
   * Stops the specified animation, executes any onComplete callback and removes
   * the animation from the registry
   * @param animationName The name of the animation to stop
   */
  const stopAnimation = (animationName: AnimationName) => {
    if (isRegistered(animationName)) {
      // Pull the animation from the registry
      const { [animationName]: animation, ...remaining } = registry;
      // Stop any audio
      if (animation.audioFile) {
        stopAudio();
      }
      // Call the completion callback if available
      animation.onComplete?.();
      // Remove animation from registry
      setRegistry(remaining as Record<AnimationName, AnimationData>);
    }
  };

  /**
   * Clears the animation registry.
   */
  const clearAnimations = () => {
    setRegistry({} as Record<AnimationName, AnimationData>);
  };

  /**
   * Verifies whether the specified animation has been registered
   * @param animationName The animation name to verify
   * @param enforceRegistration A flag indicating whether registration should be enforced
   */
  const isRegistered = (
    animationName: AnimationName,
    enforceRegistration = true
  ) => {
    if (!(animationName in registry)) {
      if (enforceRegistration) {
        throw Error(
          'Animation ' +
            animationName +
            ' must be registered before it can be used.'
        );
      } else {
        return false;
      }
    }
    return true;
  };

  return (
    <AnimationContext.Provider
      value={{
        registerAnimation,
        isAnimationActive,
        startAnimation,
        stopAnimation,
        clearAnimations
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
