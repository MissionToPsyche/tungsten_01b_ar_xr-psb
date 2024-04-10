import { expect, it, vi } from 'vitest';
import SceneName from '../types/scene-name.ts';
import SceneManager from '../SceneManager.tsx';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { SceneControlsProps } from '../SceneControls.tsx';
import { act } from '@testing-library/react';
import useScene from '../use-scene.ts';
import ViewName from '../../view/types/view-name.ts';
import useAnimation from '../../animations/use-animation.ts';

let onChangeSceneFn: SceneControlsProps['onChangeScene'];
let onRestartFn: SceneControlsProps['onRestart'];

// The following mocks are required because they render things that are not compatible with ReactThreeTestRenderer
vi.mock('../../animations/use-animation.ts');
vi.mock('../../audio/use-audio.ts');
vi.mock('../../settings/use-settings.ts');
vi.mock('../use-scene.ts');
vi.mock('../SceneControls.tsx', () => ({
  default: ({ onChangeScene, onRestart }: SceneControlsProps) => {
    onChangeSceneFn = onChangeScene;
    onRestartFn = onRestart;
    return <></>;
  }
}));
vi.mock('@artcom/react-three-arjs', () => ({
  ARCanvas: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('../../common/components/PersistentARMarker.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('../../common/loader/LoaderTracker.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('../../common/components/ModelOutliner.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useBreakpointValue: vi.fn(() => 1)
}));
// End compatibility mocks

vi.mock('../get-scene-config.ts');
vi.mock('../../common/hooks/use-sync-ar-to-window-size.ts');

const changeView = vi.fn();

const setup = () =>
  ReactThreeTestRenderer.create(<SceneManager changeView={changeView} />);

describe('<SceneManager/>', () => {
  it('should render the default scene initially', async () => {
    const renderer = await setup();

    expect(
      renderer.scene.findByProps({ name: 'assemble-scene' })
    ).toBeDefined();
  });

  it('should transition scenes when triggered', async () => {
    await setup();

    act(() => {
      onChangeSceneFn(SceneName.LAUNCH);
    });

    expect(useScene().setCurrentScene).toHaveBeenCalledWith(SceneName.LAUNCH);
  });

  it('should restart the experience when triggered', async () => {
    await setup();

    act(() => {
      onRestartFn();
    });

    expect(useScene().setCurrentScene).toHaveBeenCalledWith(SceneName.ASSEMBLY);
    expect(changeView).toHaveBeenCalledWith(ViewName.LANDING_PAGE);
    expect(useAnimation().clearAnimations).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
