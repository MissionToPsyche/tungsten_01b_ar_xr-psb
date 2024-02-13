import { createContext } from 'react';
import AnimationName from './types/animation-name';

/**
 * Context type for animations
 */
interface AnimationContextType {
  /**
   * Adds the specificed animation to the registry with the option to specify
   * a completion callback
   */
  registerAnimation: (
    animationName: AnimationName,
    callback?: () => void,
    audio?: string
  ) => void;
  /**
   * Retrieves the active status of the specified animation
   */
  isAnimationActive: (animationName: AnimationName) => boolean;
  /**
   * Starts the specified animation
   * @param name The animation name to start
   */
  startAnimation: (animationName: AnimationName) => void;
  /**
   * Stops the specified animation
   * @param name The animation name to stop
   */
  stopAnimation: (animationName: AnimationName) => void;
  /**
   * Deletes all animations from the registry
   */
  clearAnimations: () => void;
}
const AnimationContext = createContext<AnimationContextType | null>(null);

export default AnimationContext;
