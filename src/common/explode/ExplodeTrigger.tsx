import React from 'react';
import useExplode from './use-explode.ts';

/**
 * A wrapper for any element that should trigger an explode transition when clicked.
 * @param children The actual element that should be clickable
 * @param props Props provided to the wrapping group
 */
const ExplodeTrigger: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const { toggleExploded } = useExplode();
  return (
    <group {...props} onClick={toggleExploded}>
      {children}
    </group>
  );
};

export default ExplodeTrigger;
