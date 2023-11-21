import { ReactNode, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

/**
 * The component will allow the user to interact with the model by moving it around
 * and zooming in and out
 */
interface SceneWithOrbitControlsProps {
  children: ReactNode;
  minDistance?: number;
  maxDistance?: number;
}

export default function SceneWithOrbitControls({
  children,
  minDistance = 5,
  maxDistance = 20
}: SceneWithOrbitControlsProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Set the default camera position
    camera.position.set(0, 0, 0);
  }, [camera]);

  return (
    <>
      {children}
      <OrbitControls minDistance={minDistance} maxDistance={maxDistance} />
    </>
  );
}
