/**
 * Type representing animation data
 */
interface AnimationData {
  active: boolean;
  onComplete?: () => void;
  audioFile?: string;
}

export default AnimationData;
