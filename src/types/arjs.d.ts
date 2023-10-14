declare module '@ar-js-org/ar.js/three.js/build/ar-threex' {
  import ARController from '@ar-js-org/artoolkit5-js/types/ARController';
  import { Matrix4, Object3D, Renderer } from 'three';
  import { Camera } from '@react-three/fiber';

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

  declare class ArToolkitContext {
    parameters: ArToolkitContextParameters;
    arController: ARController | null;
    initialized: boolean;

    constructor(parameters: ContextParameters);

    init(onCompleted?: () => void): void;
    update(
      srcElement: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement
    ): boolean;
    addMarker(arMarkerControls: ArMarkerControls): void;
    removeMarker(arMarkerControls: ArMarkerControls): void;
    getProjectionMatrix(): THREE.Matrix4;
    dispose(): void;
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

  declare class ArToolkitSource {
    ready: boolean;
    domElement: HTMLVideoElement | HTMLImageElement | null;
    parameters: ArToolkitSourceParameters;

    constructor(parameters: ArToolkitSourceParameters);

    setParameters(parameters: ArToolkitSourceParameters): void;
    onInitialClick(): void;
    init(onReady?: () => void, onError?: (error: Error) => void): this;
    dispose(): void;
    hasMobileTorch(): boolean;
    toggleMobileTorch(): void;
    domElementWidth(): number;
    domElementHeight(): number;
    onResizeElement(): void;
    copyElementSizeTo(otherElement: HTMLElement): void;
    copySizeTo(): void; // Obsolete
    onResize(
      arToolkitContext: ArToolkitContext,
      renderer: Renderer,
      camera: Camera
    ): void; // Obsolete
  }

  type MarkerType = 'pattern' | 'barcode' | 'nft' | 'unknown';

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

  declare class ArMarkerControls extends ArBaseControls {
    context: ArToolkitContext;
    parameters: ArMarkerControlsParameters;
    object3d: Object3D;
    smoothMatrices: number[][];

    constructor(
      context: ArToolkitContext,
      object3d: Object3D | undefined,
      parameters: ArMarkerControlsParameters
    );

    dispose(): void;
    updateWithModelViewMatrix(modelViewMatrix: Matrix4): boolean;
    name(): string;
  }
}
