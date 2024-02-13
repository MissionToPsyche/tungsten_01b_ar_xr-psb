import React, { useMemo } from 'react';
import { Billboard, Line, Plane, Sphere, Text } from '@react-three/drei';
import { Vector3 } from 'three';

/**
 * An AR tooltip to indicate a 3D object is intractable.
 * @param text The text to display on the tooltip.
 * @param panelPosition Where to display the tooltip panel.
 * @param objectPosition Where to display the line connecting to the target object.
 * @constructor
 */
const ARTooltip: React.FC<{
  text: string;
  panelPosition: [number, number, number];
  objectPosition: [number, number, number];
}> = ({ text, panelPosition, objectPosition }) => {
  const panelWidth = useMemo(() => text.length * 0.5, [text]);

  const lineStart = useMemo(() => {
    const direction = new Vector3(
      objectPosition[0] - panelPosition[0],
      objectPosition[1] - panelPosition[1],
      objectPosition[2] - panelPosition[2]
    ).normalize();

    if (direction.y >= 0) {
      return [panelPosition[0], panelPosition[1] + 0.75, panelPosition[2]];
    }

    return [panelPosition[0], panelPosition[1] - 0.75, panelPosition[2]];
  }, [objectPosition, panelPosition]);

  return (
    <group>
      <Sphere position={objectPosition} scale={0.1}>
        <meshBasicMaterial transparent opacity={0.5} color="white" />
      </Sphere>
      <Line
        color="white"
        lineWidth={4}
        points={[lineStart as never, objectPosition as never]}
      />
      <Billboard follow position={panelPosition}>
        <Plane scale={[panelWidth, 1.5, 1]}>
          <meshBasicMaterial transparent opacity={0.5} color="black" />
        </Plane>
        <Text fontSize={0.8}>{text}</Text>
      </Billboard>
    </group>
  );
};

export default ARTooltip;
