import React from 'react';
import { Billboard, Circle, Ring } from '@react-three/drei';
import useSettings from '../../settings/use-settings.ts';
import RenderIf from './RenderIf.tsx';

/**
 * An AR tooltip to indicate a 3D object is intractable.
 * @constructor
 * @param props Props to pass to the group wrapper.
 */
const ARTooltip: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  const { tooltipsEnabled } = useSettings();

  return (
    <RenderIf shouldRender={tooltipsEnabled}>
      <group {...props}>
        <Billboard follow scale={0.5}>
          <Circle scale={0.25}>
            <meshBasicMaterial transparent opacity={0.5} color="white" />
          </Circle>
          <Ring scale={1}>
            <meshBasicMaterial transparent opacity={0.5} color="white" />
          </Ring>
          <Circle scale={1}>
            <meshBasicMaterial transparent opacity={0} color="white" />
          </Circle>
        </Billboard>
      </group>
    </RenderIf>
  );
};

export default ARTooltip;
