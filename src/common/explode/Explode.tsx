import React, { createContext, useCallback, useMemo, useState } from 'react';

interface ExplodeContextType {
  toggleExploded: () => void;
  isExploded: boolean;
  addExploding: () => void;
  removeExploding: () => void;
  isAtRest: boolean;
}

export const ExplodeContext = createContext<ExplodeContextType | null>(null);

const Explode: React.FC<
  { initialExploded: boolean } & JSX.IntrinsicElements['group']
> = ({ initialExploded, children, ...props }) => {
  const [isExploded, setIsExploded] = useState(initialExploded);
  const [exploding, setExploding] = useState(0);

  const toggleExploded = useCallback(() => {
    setIsExploded((prevState) => !prevState);
  }, []);

  const addExploding = useCallback(() => {
    setExploding((prevState) => prevState + 1);
  }, []);

  const removeExploding = useCallback(() => {
    setExploding((prevState) => Math.max(0, prevState - 1));
  }, []);

  const isAtRest = useMemo(() => exploding === 0, [exploding]);

  return (
    <ExplodeContext.Provider
      value={{
        toggleExploded,
        isExploded,
        addExploding,
        removeExploding,
        isAtRest
      }}
    >
      <group {...props}>{children}</group>
    </ExplodeContext.Provider>
  );
};

export default Explode;
