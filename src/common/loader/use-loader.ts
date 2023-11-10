import { useContext } from 'react';
import LoaderContext from './loader-context.ts';

/**
 * Provides safe access to the loader context
 */
const useLoader = () => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error('useLoader must be used within <LoaderProvider/>');
  }

  return loaderContext;
};

export default useLoader;
