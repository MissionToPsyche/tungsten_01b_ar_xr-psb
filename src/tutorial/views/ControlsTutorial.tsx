import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { CruiseOrbiter } from '../../artifacts/CruiseOrbiter';
import degreesToRadians from '../../common/utils/degrees-to-radians';
import { Euler } from 'three';

const rotation = new Euler(degreesToRadians(45), 0, 0);

const ControlsTutorial: React.FC = () => {
  return (
    <Canvas>
      <color attach="background" args={['#2e4371']} />
      <OrbitControls
        enabled
        zoomSpeed={0.8}
        rotateSpeed={0.8}
        panSpeed={0.5}
        minAzimuthAngle={-Math.PI / 1.2}
        maxAzimuthAngle={Math.PI / 1.2}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        maxZoom={0.04}
        maxDistance={30}
      />
      <CruiseOrbiter scale={0.3} rotation={rotation} thrustersOn={true} />
      <ambientLight intensity={0.2} />
    </Canvas>
  );
};
export default ControlsTutorial;
