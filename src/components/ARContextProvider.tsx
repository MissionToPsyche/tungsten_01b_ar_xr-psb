// Adapted from https://github.com/artcom/react-three-arjs/blob/main/src/ar/ar.js

import {
  ArToolkitContext,
  ArToolkitContextParameters,
  ArToolkitSource,
  ArToolkitSourceParameters
} from '@ar-js-org/ar.js/three.js/build/ar-threex';
import { useFrame, useThree } from '@react-three/fiber';
import React, { createContext, useCallback, useEffect, useMemo } from 'react';

export const ARContext = createContext<{
  arToolkitSource: ArToolkitSource;
  arToolkitContext: ArToolkitContext;
} | null>(null);

const ARContextProvider = React.memo(function AR({
  children,
  sourceType,
  patternRatio,
  matrixCodeType,
  detectionMode,
  cameraParametersUrl,
  onCameraStreamReady,
  onCameraStreamError
}: React.PropsWithChildren<{
  sourceType: ArToolkitSourceParameters['sourceType'];
  cameraParametersUrl: ArToolkitContextParameters['cameraParametersUrl'];
  detectionMode: ArToolkitContextParameters['detectionMode'];
  patternRatio: ArToolkitContextParameters['patternRatio'];
  matrixCodeType: ArToolkitContextParameters['matrixCodeType'];
  onCameraStreamReady?: () => void;
  onCameraStreamError?: () => void;
}>) {
  const { gl, camera } = useThree();

  const arContextValue = useMemo(() => {
    const arToolkitSource = new ArToolkitSource({
      sourceType,
      sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480,
      sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640
    });
    const arToolkitContext = new ArToolkitContext({
      cameraParametersUrl,
      detectionMode,
      patternRatio,
      matrixCodeType
    });

    return { arToolkitContext, arToolkitSource };
  }, [
    patternRatio,
    matrixCodeType,
    cameraParametersUrl,
    detectionMode,
    sourceType
  ]);

  const onResize = useCallback(() => {
    const { arToolkitContext, arToolkitSource } = arContextValue;

    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(gl.domElement);

    const { arController } = arToolkitContext;
    if (!arController) {
      return;
    }

    // @ts-expect-error We have to access the canvas here
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { canvas } = arController;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    arToolkitSource.copyElementSizeTo(canvas);
  }, [gl, arContextValue]);

  const onUnmount = useCallback(() => {
    const { arToolkitContext, arToolkitSource } = arContextValue;

    window.removeEventListener('resize', onResize);

    const arController = arToolkitContext.arController;
    if (arController) {
      arController.dispose();

      // @ts-expect-error We have no control over the ArController type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const cameraParam = arController.cameraParam;
      if (cameraParam) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        cameraParam.dispose();
      }
    }

    const { domElement } = arToolkitSource;
    if (domElement && domElement instanceof HTMLVideoElement) {
      const { srcObject } = domElement;

      if (srcObject && srcObject instanceof MediaStream) {
        srcObject.getTracks().map((track) => {
          track.stop();
        });
      }

      domElement.remove();
    }
  }, [onResize, arContextValue]);

  const getSourceOrientation = useCallback(() => {
    const {
      arToolkitSource: { domElement }
    } = arContextValue;

    if (
      domElement &&
      'videoWidth' in domElement &&
      domElement.videoWidth > domElement.videoHeight
    ) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }, [arContextValue]);

  useEffect(() => {
    const { arToolkitContext, arToolkitSource } = arContextValue;

    arToolkitSource.init(() => {
      if (arToolkitSource.domElement) {
        arToolkitSource.domElement.onloadedmetadata = () => {
          if (onCameraStreamReady) {
            onCameraStreamReady();
          }

          onResize();
        };
      }
    }, onCameraStreamError);

    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(
        arContextValue.arToolkitContext.getProjectionMatrix()
      );

      const { arController } = arToolkitContext;
      if (!arController) {
        return;
      }

      // @ts-expect-error We have to access this
      arController.orientation = getSourceOrientation();
      // @ts-expect-error We have to access this
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      arController.options.orientation = getSourceOrientation();
    });

    window.addEventListener('resize', onResize);
    return onUnmount;
  }, [
    arContextValue,
    camera,
    onCameraStreamReady,
    onCameraStreamError,
    onResize,
    onUnmount,
    getSourceOrientation
  ]);

  useFrame(() => {
    const { arToolkitContext, arToolkitSource } = arContextValue;

    if (arToolkitSource.ready && arToolkitSource.domElement) {
      arToolkitContext.update(arToolkitSource.domElement);
    }
  });

  return (
    <ARContext.Provider value={arContextValue}>{children}</ARContext.Provider>
  );
});

export default ARContextProvider;
