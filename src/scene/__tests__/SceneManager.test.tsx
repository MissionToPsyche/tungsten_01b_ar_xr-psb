import { expect, it, Mock, vi } from 'vitest';
import getSceneConfig from '../get-scene-config.ts';
import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import SceneManager from '../SceneManager.tsx';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { Vector3 } from 'three';
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
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useBreakpointValue: vi.fn(() => 1)
}));
// End compatibility mocks

vi.mock('../get-scene-config.ts');
vi.mock('../../common/hooks/use-sync-ar-to-window-size.ts');

const mockConfig: SceneConfig = {
  defaultScene: SceneName.ASSEMBLY,
  cameraParametersUrl: '/hello',
  disableAr: false,
  defaultCameraPosition: new Vector3(0, 6, 18),
  markerXRotation: 0
} as SceneConfig;

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
    await setup();

    act(() => {
      onChangeSceneFn(SceneName.LAUNCH);
    });

    expect(useScene().setCurrentScene).toHaveBeenCalledWith(SceneName.LAUNCH);
  });
});
