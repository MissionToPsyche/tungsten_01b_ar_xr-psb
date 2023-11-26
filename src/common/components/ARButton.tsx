import { Plane, Text } from '@react-three/drei';
import React, { useCallback, useMemo, useState } from 'react';

/**
 * A button to be used in AR scenes
 *
 * @param children The text to display
 * @param onClick Callback for when the button is clicked
 * @param props Props for the <group/> component
 */
const ARButton: React.FC<
  Omit<JSX.IntrinsicElements['group'], 'children'> & {
    children: string;
    onClick: () => void;
    backgroundColor: string;
    backgroundActiveColor: string;
  }
> = ({
  children,
  onClick,
  backgroundColor,
  backgroundActiveColor,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  const color = useMemo(() => {
    if (isActive) {
      return {
        background: backgroundActiveColor,
        text: 'black'
      };
    }

    return {
      background: backgroundColor,
      text: 'white'
    };
  }, [backgroundActiveColor, backgroundColor, isActive]);

  const activate = useCallback(() => {
    setIsActive(true);
  }, []);

  const deActivate = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <group
      onPointerEnter={activate}
      onPointerLeave={deActivate}
      onClick={onClick}
      {...props}
    >
      <Plane scale={[children.length * 0.6, 1.5, 1]}>
        <meshBasicMaterial color={color.background} />
      </Plane>
      <Text
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.25]}
        color={color.text}
      >
        {children}
      </Text>
    </group>
  );
};

export default ARButton;
