import { createContext } from 'react';
import AnimationName from './types/animation-name';

/**
 * Context type for animations
 */
interface AnimationContextType {
  /**
   * Boolean value indicating whether animations are active
   */
  active: boolean;
  /**
   * Function to set the active state
   * @param state The state of the animation to set
   */
  setActive: (state: boolean) => void;
  /**
   * The current animation name
   */
  current: AnimationName;
  /**
   * Function to register the current animation name
   * @param name The animation name to set as current
   */
  setCurrent: (name: AnimationName) => void;
  /**
   * Callback function to execute after animation completes
   */
  onComplete?: () => void;
  /**
   * Registers the specified function as the onComplete callback
   * @param onComplete The function to exexcute after animation completes
   */
  setOnComplete: (onComplete: () => void) => void;
}
const AnimationContext = createContext<AnimationContextType | null>(null);

export default AnimationContext;
