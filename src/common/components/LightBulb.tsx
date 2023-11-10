import { useMemo } from 'react';
import { Sphere } from '@react-three/drei';
import { ColorRepresentation, MeshStandardMaterial } from 'three';
import filledVector from '../utils/filled-vector.ts';

/**
 * A component that acts as a light bulb with both a point light and an emissive sphere to represent the bulb
 * @param color The color of the light and bulb sphere
 * @param intensity The intensity of the point light
 * @param radius The radius of the bulb sphere
 * @param props Props for the group that wraps the bulb and light
 */
const LightBulb = ({
  color,
  intensity,
  radius,
  ...props
}: JSX.IntrinsicElements['group'] & {
  color: ColorRepresentation;
  intensity: number;
  radius: number;
}) => {
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        emissive: color,
        emissiveIntensity: 1,
        color,
        roughness: 1
      }),
    [color]
  );

  const scale = useMemo(() => filledVector(radius), [radius]);

  return (
    <group {...props}>
      <pointLight color={color} intensity={intensity} />
      <Sphere material={material} scale={scale} />
    </group>
  );
};

export default LightBulb;
