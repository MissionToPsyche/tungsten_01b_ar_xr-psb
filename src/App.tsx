import './App.css';
import { CanvasProps, Vector3 } from '@react-three/fiber';
import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { cameraParametersUrl, markerPatternUrls } from './constants';
import { FalconHeavy } from './components/artifacts/FalconHeavy.tsx';

const lightPosition: Vector3 = [10, 10, 0];
const boxPosition: Vector3 = [0, 1, 0];

const onCanvasCreated: CanvasProps['onCreated'] = ({ gl }) => {
  gl.setSize(window.innerWidth, window.innerHeight);
};

function App() {
  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      onCreated={onCanvasCreated}
      cameraParametersUrl={cameraParametersUrl}
    >
      <ambientLight />
      <pointLight position={lightPosition} intensity={10} />
      <ARMarker
        type="pattern"
        patternUrl={markerPatternUrls[0]}
        params={{ smooth: true }}
      >
        <FalconHeavy position={boxPosition} scale={[0.5, 0.5, 0.5]} />
      </ARMarker>
    </ARCanvas>
  );
}

export default App;
