import './App.css';
import ARCanvas from './components/ARCanvas.tsx';
import ARMarker from './components/ARMarker.tsx';
import { Box } from '@react-three/drei';
import { CanvasProps, Vector3 } from '@react-three/fiber';

const markerPatternUrl = 'assets/patt.hiro';
const lightPosition: Vector3 = [10, 10, 0];
const boxPosition: Vector3 = [1, 1, 1];

const onCanvasCreated: CanvasProps['onCreated'] = ({ gl }) => {
  gl.setSize(window.innerWidth, window.innerHeight);
};

function App() {
  return (
    <ARCanvas onCreated={onCanvasCreated}>
      <ambientLight />
      <pointLight position={lightPosition} />
      <ARMarker patternUrl={markerPatternUrl}>
        <Box position={boxPosition} />
      </ARMarker>
    </ARCanvas>
  );
}

export default App;
