import { useMemo } from 'react';
import { Sphere } from '@react-three/drei';
import { ColorRepresentation, MeshStandardMaterial } from 'three';
import filledVector from '../utils/filled-vector.ts';

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
