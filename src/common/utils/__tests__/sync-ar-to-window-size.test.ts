import { expect, vi } from 'vitest';
import { PerspectiveCamera, WebGLRenderer } from 'three';
import syncArToWindowSize from '../sync-ar-to-window-size.ts';

const getElementsByTagName = vi.spyOn(document, 'getElementsByTagName');

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let canvas: HTMLCanvasElement;

describe('syncArToWindowSize', () => {
  beforeEach(() => {
    renderer = {
      setSize: vi.fn()
    } as unknown as WebGLRenderer;

    camera = {
      aspect: 0,
      updateProjectionMatrix: vi.fn()
    } as unknown as PerspectiveCamera;

    canvas = {
      style: {
        marginLeft: ''
      }
    } as unknown as HTMLCanvasElement;
  });

  it('should throw an error if there are no canvases', () => {
    getElementsByTagName.mockReturnValueOnce(
      [] as unknown as HTMLCollectionOf<Element>
    );

    expect(() => {
      syncArToWindowSize(renderer, camera);
    }).toThrow();
  });

  it('should throw an error if there are more than one canvas', () => {
    getElementsByTagName.mockReturnValueOnce([
      '1',
      '2'
    ] as unknown as HTMLCollectionOf<Element>);

    expect(() => {
      syncArToWindowSize(renderer, camera);
    }).toThrow();
  });

  it('should sync render and camera properties to the window size', () => {
    getElementsByTagName.mockReturnValueOnce([
      canvas
    ] as unknown as HTMLCollectionOf<Element>);

    syncArToWindowSize(renderer, camera);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(renderer.setSize).toHaveBeenCalledWith(
      window.innerWidth,
      window.innerHeight
    );
    expect(canvas.style.marginLeft).toEqual('0px');
    expect(camera.aspect).toEqual(window.innerWidth / window.innerHeight);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(camera.updateProjectionMatrix).toHaveBeenCalledWith();
  });
});
