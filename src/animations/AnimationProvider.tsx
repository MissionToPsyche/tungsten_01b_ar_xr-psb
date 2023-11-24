import { PropsWithChildren, useState } from 'react';
import ModalContext from './animation-context';
import AnimationName from './types/animation-name';

/**
 * Animation provider that manages the state of any animations within a scene.
 */
export const AnimationProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [active, _setActive] = useState(false);
  const [current, setCurrent] = useState(AnimationName.NONE);
  const [onComplete, setOnComplete] = useState(() => () => {
    console.log('Animation Provider initialized');
  });

  const setActive = (state: boolean) => {
    _setActive(state);
    if (!state) {
      onComplete();
    }
  };
  const setOnCompleteWrapper = (callback: () => void) => {
    setOnComplete(() => callback);
  };

  return (
    <ModalContext.Provider
      value={{
        active,
        setActive,
        current,
        setCurrent,
        onComplete,
        setOnComplete: setOnCompleteWrapper
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
