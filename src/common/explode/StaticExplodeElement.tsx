import React from 'react';
import { ExplodeElementProps } from './ExplodeElement.tsx';
import useExplode from './use-explode.ts';
import { config, SpringValue, useSpring } from '@react-spring/three';
import { Euler, Vector3 } from '@react-three/fiber';

/**
 * A wrapper for an element that should explode. However, rather than the object moving, the animated position and rotation are passed to the child function.
 * @param children The child elements that should be wrapped
 * @param startPosition The position that the elements should start at
 * @param explodedPosition The position that the elements should end up at when exploded
 * @param startRotation The rotation that the elements should start at
 * @param explodedRotation The rotation that the elements should end up at when exploded
 * @param explodeDelay Optional delay to apply to the element when exploding
 * @param unExplodeDelay Optional delay to apply to the element when un-exploding
 * @param props Any additional props provided to the wrapping group
 */
const StaticExplodeElement: React.FC<
  Omit<ExplodeElementProps, 'children'> & {
    children: (
      isExploded: boolean,
      position: SpringValue<Vector3>,
      rotation: SpringValue<Euler>
    ) => React.ReactNode;
  }
> = ({
  children,
  startPosition,
  explodedPosition,
  startRotation,
  explodedRotation,
  explodeDelay,
  unExplodeDelay,
  ...props
}) => {
  const { isExploded, addExploding, removeExploding } = useExplode();

  const { rotation, position } = useSpring({
    position: isExploded ? explodedPosition : startPosition,
    rotation: isExploded ? explodedRotation : startRotation,
    config: config.stiff,
    onStart: addExploding,
    onRest: removeExploding,
    delay: isExploded ? explodeDelay : unExplodeDelay
  });

  return (
    <group {...props}>
      {children(isExploded, position as never, rotation as never)}
    </group>
  );
};

export default StaticExplodeElement;
