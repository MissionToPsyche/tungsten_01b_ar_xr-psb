import { PropsWithChildren, useState } from 'react';
import ModalContext from './animation-context';
import AnimationName from './types/animation-name';
import AnimationData from './types/animation-data';

/**
 * Animation provider that manages the state of any animations within a scene.
 */
export const AnimationProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [registry, setRegistry] = useState<
    Record<AnimationName, AnimationData>
  >({} as Record<AnimationName, AnimationData>);

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
    callback?: () => void
  ) => {
    // Verify the animation isn't already registered
    if (isRegistered(animationName, false)) {
      return;
    }
    setRegistry((reg) => ({
      ...reg,
      [animationName]: {
        active: false,
        onComplete: callback
      }
    }));
  };

  /**
   * Starts the specified animation
   * @param animationName The name of the animation to start
   */
  const startAnimation = (animationName: AnimationName) => {
    if (isRegistered(animationName)) {
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
   * Stops the specified animation and executes any onComplete callback
   * @param animationName The name of the animation to stop
   */
  const stopAnimation = (animationName: AnimationName) => {
    if (isRegistered(animationName)) {
      setRegistry((reg) => ({
        ...reg,
        [animationName]: {
          ...reg[animationName],
          active: false
        }
      }));
      const fn = registry[animationName].onComplete;
      if (fn != null) {
        fn();
      }
    }
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
    <ModalContext.Provider
      value={{
        registerAnimation,
        isAnimationActive,
        startAnimation,
        stopAnimation
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
