import { useContext } from 'react';
import AnimationContext from './animation-context';

/**
 * Hook to retrieve the AnimationContext
 */
function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw Error('Animations cannot be used outside of <AnimationProvider>');
  }
  return context;
}

export default useAnimation;
