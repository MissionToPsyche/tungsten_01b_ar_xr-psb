import { useContext } from 'react';
import { ExplodeContext } from './Explode.tsx';

/**
 * A hook that enables safe access to Explode context.
 */
const useExplode = () => {
  const context = useContext(ExplodeContext);
  if (!context) {
    throw Error('useExplode cannot be used outside of <Explode/>');
  }
  return context;
};

export default useExplode;
