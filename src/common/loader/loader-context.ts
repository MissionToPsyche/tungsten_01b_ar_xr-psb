import { createContext } from 'react';

/**
 * Global context type for the loader.
 */
interface LoaderContextType {
  /**
   * The loading progress, a value between 0 and 100
   */
  progress: number;
  /**
   * Sets the current loading progress
   * @param value The new progress, a value between 0 and 100
   */
  setProgress: (value: number) => void;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

export default LoaderContext;
