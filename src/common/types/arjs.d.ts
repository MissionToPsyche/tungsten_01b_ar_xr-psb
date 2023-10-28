declare module '@ar-js-org/ar.js/three.js/build/ar-threex' {
  interface ArToolkitContextParameters {
    trackingBackend: 'artoolkit';
    debug: boolean;
    detectionMode: 'color' | 'color_and_matrix' | 'mono' | 'mono_and_matrix';
    matrixCodeType:
      | '3x3'
      | '3x3_HAMMING63'
      | '3x3_PARITY65'
      | '4x4'
      | '4x4_BCH_13_9_3'
      | '4x4_BCH_13_5_5'
      | '5x5_BCH_22_12_5'
      | '5x5_BCH_22_7_7'
      | '5x5'
      | '6x6';
    cameraParametersUrl: string;
    maxDetectionRate: number;
    canvasWidth: number;
    canvasHeight: number;
    patternRatio: number;
    labelingMode: 'black_region' | 'white_region';
    imageSmoothingEnabled: boolean;
  }

  interface ArToolkitSourceParameters {
    sourceType?: 'webcam' | 'image' | 'video';
    sourceUrl?: string | null;
    deviceId?: string | null;
    sourceWidth?: number;
    sourceHeight?: number;
    displayWidth?: number;
    displayHeight?: number;
  }

  interface ArMarkerControlsParameters {
    size?: number;
    type: MarkerType;
    patternUrl?: string | null;
    barcodeValue?: string | null;
    descriptorsUrl?: string | null;
    changeMatrixMode?: 'modelViewMatrix' | 'cameraTransformMatrix';
    minConfidence?: number;
    smooth?: boolean;
    smoothCount?: number;
    smoothTolerance?: number;
    smoothThreshold?: number;
  }
}
