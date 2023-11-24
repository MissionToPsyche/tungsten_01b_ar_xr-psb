import { ReactNode } from 'react';
import {
  EffectComposer,
  Outline,
  Selection
} from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';

/**
 * This component provides an outline effect to any child objects
 * that have been selected via the <Select> component
 */
function ModelOutliner({
  color,
  children
}: {
  color: number;
  children: ReactNode;
}) {
  return (
    <Selection>
      <EffectComposer multisampling={5} autoClear={false}>
        <Outline
          blendFunction={BlendFunction.SCREEN}
          edgeStrength={4}
          pulseSpeed={0.25}
          visibleEdgeColor={color}
          hiddenEdgeColor={0x000000}
          kernelSize={KernelSize.MEDIUM}
          blur={true}
          xRay={true}
        />
      </EffectComposer>
      {children}
    </Selection>
  );
}

export default ModelOutliner;
