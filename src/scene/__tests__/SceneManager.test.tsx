import { expect, it, vi } from 'vitest';
import SceneName from '../types/scene-name.ts';
import SceneManager from '../SceneManager.tsx';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { SceneControlsProps } from '../SceneControls.tsx';
import { act } from '@testing-library/react';
import useScene from '../use-scene.ts';

let onChangeSceneFn: SceneControlsProps['onChangeScene'];

// The following mocks are required because they render things that are not compatible with ReactThreeTestRenderer
vi.mock('../../animations/use-animation.ts');
vi.mock('../../audio/use-audio.ts');
vi.mock('../../settings/use-settings.ts');
vi.mock('../use-scene.ts');
vi.mock('../SceneControls.tsx', () => ({
  default: ({ onChangeScene }: SceneControlsProps) => {
    onChangeSceneFn = onChangeScene;
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
});
