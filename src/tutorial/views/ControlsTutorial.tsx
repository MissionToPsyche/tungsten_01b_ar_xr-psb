import { OrbitControls, Stars } from '@react-three/drei';
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
      <Stars
        radius={50}
        depth={50}
        count={200}
        factor={6}
        saturation={7}
        fade={true}
      />
      <CruiseOrbiter
        scale={0.3}
        rotation={rotation}
        thrustersOn={true}
        panelsOpen={true}
        animatePanels={false}
      />
    </Canvas>
  );
};
export default ControlsTutorial;
