import { expect, it, Mock, vi } from 'vitest';
import getSceneConfig from '../get-scene-config.ts';
import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import SceneManager from '../SceneManager.tsx';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { SceneControlsProps } from '../SceneControls.tsx';
import { act } from '@testing-library/react';

let onChangeSceneFn: SceneControlsProps['onChangeScene'];

// The following mocks are required because they render things that are not compatible with ReactThreeTestRenderer
vi.mock('../../animations/use-animation.ts');
vi.mock('../../audio/use-audio.ts');
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

const mockConfig: SceneConfig = {
  defaultScene: SceneName.ASSEMBLY,
  scenes: {
    [SceneName.ASSEMBLY]: {
      component: () => <group name="assemble-scene" />,
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Next Scene'
      }
    },
    [SceneName.LAUNCH]: {
      component: () => <group name="launch-scene" />,
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.CRUISE,
        buttonText: 'Next Scene'
      },
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Previous Scene'
      }
    }
  } as unknown as SceneConfig['scenes'],
  cameraParametersUrl: '/hello',
  disableAr: false,
  disableAudio: true
};

(getSceneConfig as Mock).mockReturnValue(mockConfig);
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
    const renderer = await setup();

    act(() => {
      onChangeSceneFn(SceneName.LAUNCH);
    });

    expect(renderer.scene.findByProps({ name: 'launch-scene' })).toBeDefined();
  });
});
