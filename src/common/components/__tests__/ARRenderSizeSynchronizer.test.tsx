import ReactThreeTestRenderer from '@react-three/test-renderer';
import ARRenderSizeSynchronizer from '../ARRenderSizeSynchronizer.tsx';
import useSyncArToWindowSize from '../../hooks/use-sync-ar-to-window-size.ts';
import { expect } from 'vitest';

vi.mock('../../hooks/use-sync-ar-to-window-size.ts');

const setup = (debug = false) =>
  ReactThreeTestRenderer.create(<ARRenderSizeSynchronizer debug={debug} />);

describe('<ARRenderSizeSynchronizer/>', () => {
  it('should call the useSyncArToWindowSize hook', async () => {
    await setup();

    expect(useSyncArToWindowSize).toHaveBeenCalled();
  });

  it('should not display the debug circle if debug=false', async () => {
    const renderer = await setup();

    expect(renderer.scene.children.length).toEqual(0);
  });

  it('should display the debug circle if debug=true', async () => {
    const renderer = await setup(true);

    expect(renderer.scene.children.length).toEqual(1);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
