/**
 * Type representing animation data
 */
interface AnimationData {
  active: boolean;
  onComplete?: () => void;
}

export default AnimationData;
