import { Image } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';

interface ImageProps {
  path: string;
  scale: number;
  position: Vector3;
}

const CountdownImage: React.FC<ImageProps> = ({ path, scale, position }) => {
  return (
    <group scale={scale} position={position}>
      <Image url={path} />
    </group>
  );
};

export default CountdownImage;
