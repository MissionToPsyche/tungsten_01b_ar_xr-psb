import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FactsModalTrigger from '../../facts/FactsModalTrigger';
import ARTooltip from '../../common/components/ARTooltip';

const TooltipTutorial: React.FC = () => {
  return (
    <Canvas>
      <color attach="background" args={['#2e4371']} />
      <Stars
        radius={50}
        depth={50}
        count={200}
        factor={6}
        saturation={7}
        fade={true}
      />
      <FactsModalTrigger factName="tooltip">
        <ARTooltip />
      </FactsModalTrigger>
    </Canvas>
  );
};
export default TooltipTutorial;
