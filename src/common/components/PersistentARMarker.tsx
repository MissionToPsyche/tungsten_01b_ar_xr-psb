import React, { useCallback, useRef, useState } from 'react';
import { ARMarker } from '@artcom/react-three-arjs';
import ARMarkerMirror from './ARMarkerMirror.tsx';
import { Group } from 'three';

/**
 * An AR marker that keeps the marker visible at all times.
 * @param markerUrl The url for the marker pattern.
 * @param children The children to display within the marker.
 */
const PersistentARMarker: React.FC<
  React.PropsWithChildren<{ markerUrl: string }>
> = ({ markerUrl, children }) => {
  const markerChildRef = useRef<Group>(null);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  const onMarkerFound = useCallback(() => {
    setIsMarkerVisible(true);
  }, []);

  const onMarkerLost = useCallback(() => {
    setIsMarkerVisible(false);
  }, []);

  return (
    <>
      <ARMarkerMirror
        markerChildRef={markerChildRef}
        isMarkerVisible={isMarkerVisible}
      >
        {children}
      </ARMarkerMirror>
      <ARMarker
        type="pattern"
        patternUrl={markerUrl}
        onMarkerFound={onMarkerFound}
        onMarkerLost={onMarkerLost}
      >
        <group ref={markerChildRef} />
      </ARMarker>
    </>
  );
};

export default PersistentARMarker;
