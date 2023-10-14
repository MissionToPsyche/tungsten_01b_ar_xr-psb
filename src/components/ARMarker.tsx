// Adapted from https://github.com/artcom/react-three-arjs/blob/main/src/ar/arMarker.js

import React, { useEffect, useRef } from 'react';
import useAR from '../hooks/use-ar.ts';
import {
  ArMarkerControls,
  ArMarkerControlsParameters
} from '@ar-js-org/ar.js/three.js/build/ar-threex';
import { Object3D } from 'three';

const ARMarker = ({
  children,
  patternUrl
}: React.PropsWithChildren<{
  patternUrl: ArMarkerControlsParameters['patternUrl'];
}>) => {
  const markerRoot = useRef<Object3D>();
  const { arToolkitContext } = useAR();

  useEffect(() => {
    const markerControls = new ArMarkerControls(
      arToolkitContext,
      markerRoot.current,
      {
        type: 'pattern',
        patternUrl
      }
    );

    arToolkitContext.addMarker(markerControls);

    return () => {
      arToolkitContext.removeMarker(markerControls);
    };
  }, [arToolkitContext, patternUrl]);

  // @ts-expect-error TODO: fix this type issue
  return <group ref={markerRoot}>{children}</group>;
};

export default ARMarker;
