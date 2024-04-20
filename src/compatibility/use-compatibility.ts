import compatibilityState from './compatibility-state.ts';
import { useRecoilState } from 'recoil';
import { useMemo } from 'react';

export interface Compatibility {
  isWebXrArSupported: boolean;
  isArJsSupported: boolean;
}

export interface CompatibilityState extends Compatibility {
  isArSupported: boolean;
}

const useCompatibility = (): CompatibilityState => {
  const [state] = useRecoilState(compatibilityState);

  return useMemo(() => {
    return {
      ...state,
      isArSupported: state.isWebXrArSupported || state.isArJsSupported
    };
  }, [state]);
};

export default useCompatibility;
