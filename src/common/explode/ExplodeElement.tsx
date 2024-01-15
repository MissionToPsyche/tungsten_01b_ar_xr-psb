import React from 'react';
import { animated, config, useSpring } from '@react-spring/three';
import useExplode from './use-explode.ts';

/**
 * A wrapper for an element that should
 * @param children The child elements that should be wrapped
 * @param startPosition The position that the elements should start at
 * @param explodedPosition The position that the elements should end up at when exploded
 * @param startRotation The rotation that the elements should start at
 * @param explodedRotation The rotation that the elements should end up at when exploded
 * @param props Any additional props provided to the wrapping group
 */
const ExplodeElement: React.FC<
  React.PropsWithChildren<
    {
      startPosition: JSX.IntrinsicElements['group']['position'];
      explodedPosition: JSX.IntrinsicElements['group']['position'];
      startRotation: JSX.IntrinsicElements['group']['rotation'];
      explodedRotation: JSX.IntrinsicElements['group']['rotation'];
    } & Omit<JSX.IntrinsicElements['group'], 'position'>
  >
> = ({
  children,
  startPosition,
  explodedPosition,
  startRotation,
  explodedRotation,
  ...props
}) => {
  const { isExploded, addExploding, removeExploding } = useExplode();

  const { rotation, position } = useSpring({
    position: isExploded ? explodedPosition : startPosition,
    rotation: isExploded ? explodedRotation : startRotation,
    config: config.wobbly,
    onStart: addExploding,
    onRest: removeExploding
  });

  return (
    <animated.group
      {...props}
      position={position as never}
      rotation={rotation as never}
    >
      {children}
    </animated.group>
  );
};

export default ExplodeElement;
