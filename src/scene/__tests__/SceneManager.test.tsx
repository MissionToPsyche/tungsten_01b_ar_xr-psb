import { expect, it, Mock, vi } from 'vitest';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import { render } from '@testing-library/react';
import getSceneConfig from '../get-scene-config.ts';
import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { Html } from '@react-three/drei';
import SceneManager from '../SceneManager.tsx';

vi.mock('../get-scene-config.ts');
mockResizeObserver();

const mockConfig: SceneConfig = {
  defaultScene: SceneName.LAUNCH,
  scenes: {
    [SceneName.LAUNCH]: {
      component: () => (
        <Html>
          <p>Launch Scene</p>
        </Html>
      ),
      markerUrl: '/hello'
    }
  },
  cameraParametersUrl: '/hello'
};

(getSceneConfig as Mock).mockReturnValue(mockConfig);
const changeView = vi.fn();

const setup = () => render(<SceneManager changeView={changeView} />);

describe('<SceneManager/>', () => {
  it('should render the default scene initially', () => {
    setup();

    // TODO: Complete test once we figure out how to properly test 3D, likely https://docs.pmnd.rs/react-three-fiber/tutorials/testing
    expect(true).toBeTruthy();
  });
});
