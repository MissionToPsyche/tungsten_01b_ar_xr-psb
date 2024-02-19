import { renderHook } from '@testing-library/react';
import useSceneConfig from '../use-scene-config.ts';
import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import getSceneConfig from '../get-scene-config.ts';
import { Vector3 } from 'three';
import useSettings, { SettingsState } from '../../settings/use-settings.ts';
import isArSupported from '../utils/is-ar-supported.ts';

vi.mock('../get-scene-config.ts');
vi.mock('../utils/is-ar-supported.ts');
vi.mock('../../settings/use-settings.ts');

const mockSceneConfig: SceneConfig = {
  defaultScene: SceneName.ASSEMBLY,
  scenes: {
    [SceneName.ASSEMBLY]: {
      component: () => null,
      markerUrl: 'assets/patt.hiro',
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        animation: 'assemble',
        buttonText: 'Assemble'
      }
    }
  } as unknown as SceneConfig['scenes'],
  cameraParametersUrl: 'camera-parameters-url',
  defaultCameraPosition: new Vector3(0, 6, 25),
  disableAr: false,
  markerXRotation: 0
};

const setup = () => renderHook(() => useSceneConfig());

describe('useSceneConfig', () => {
  it('should return the scene config with AR enabled', () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      arEnabled: true
    } as unknown as SettingsState);
    vi.mocked(isArSupported).mockReturnValue(true);
    vi.mocked(getSceneConfig).mockReturnValue(mockSceneConfig);

    const {
      result: { current }
    } = setup();

    expect(current).toEqual({ ...mockSceneConfig, markerXRotation: -90 });
  });

  it('should return the scene config with AR disabled', () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      arEnabled: true
    } as unknown as SettingsState);
    vi.mocked(isArSupported).mockReturnValue(true);
    vi.mocked(getSceneConfig).mockReturnValue({
      ...mockSceneConfig,
      disableAr: true
    });

    const {
      result: { current }
    } = setup();

    expect(current).toEqual({
      ...mockSceneConfig,
      disableAr: true,
      markerXRotation: 0
    });
  });

  it('should return the scene config with AR disabled if AR is not supported', () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      arEnabled: true
    } as unknown as SettingsState);
    vi.mocked(isArSupported).mockReturnValue(false);
    vi.mocked(getSceneConfig).mockReturnValue(mockSceneConfig);

    const {
      result: { current }
    } = setup();

    expect(current).toEqual({
      ...mockSceneConfig,
      disableAr: true,
      markerXRotation: 0
    });
  });

  it('should return the scene config with AR disabled if AR is not enabled via settings', () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      arEnabled: false
    } as unknown as SettingsState);
    vi.mocked(isArSupported).mockReturnValue(true);
    vi.mocked(getSceneConfig).mockReturnValue(mockSceneConfig);

    const {
      result: { current }
    } = setup();

    expect(current).toEqual({
      ...mockSceneConfig,
      disableAr: true,
      markerXRotation: 0
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
