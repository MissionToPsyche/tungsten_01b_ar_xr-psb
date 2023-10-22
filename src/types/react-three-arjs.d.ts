declare module '@artcom/react-three-arjs' {
  import { CanvasProps } from '@react-three/fiber/dist/declarations/src/web/Canvas';

  export interface ARCanvasProps extends CanvasProps {
    arEnabled?: boolean;
    tracking?: boolean;
    children?: React.ReactNode;
    patternRatio?: number;
    detectionMode?: string;
    cameraParametersUrl?: string;
    matrixCodeType?: string;
    sourceType?: string;
    onCameraStreamReady?: () => void;
    onCameraStreamError?: (error: Error) => void;
    camera?: {
      position: [number, number, number];
    };
  }

  declare const ARCanvas: React.FC<ARCanvasProps>;

  export interface ARMarkerProps {
    children?: React.ReactNode;
    type: 'barcode' | 'pattern';
    barcodeValue?: string;
    patternUrl?: string;
    params?: Record<string, unknown>;
    onMarkerFound?: () => void;
    onMarkerLost?: () => void;
  }

  declare const ARMarker: React.FC<ARMarkerProps>;
}
