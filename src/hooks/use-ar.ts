import React from 'react';
import { ARContext } from '../components/ARContextProvider.tsx';

const useAR = () => {
  const arValue = React.useContext(ARContext);

  if (!arValue) {
    throw new Error('useAR must be used within <ARContextProvider/>.');
  }

  return arValue;
};

export default useAR;
