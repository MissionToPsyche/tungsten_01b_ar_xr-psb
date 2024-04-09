import { Canvas } from '@react-three/fiber';
import FactsModalTrigger from '../../facts/FactsModalTrigger';
import ARTooltip from '../../common/components/ARTooltip';

const TooltipTutorial: React.FC = () => {
  return (
    <Canvas>
      <color attach="background" args={['#2e4371']} />
      <FactsModalTrigger factName="tooltip">
        <ARTooltip position={[0, 0, 3.5]} />
      </FactsModalTrigger>
    </Canvas>
  );
};
export default TooltipTutorial;
