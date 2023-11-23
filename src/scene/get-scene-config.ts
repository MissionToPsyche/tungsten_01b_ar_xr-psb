import { SceneConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import LaunchScene from './scenes/LaunchScene.tsx';
import CruiseScene from './scenes/CruiseScene.tsx';

/**
 * Function to get the scene configuration. Right now extracted into a method
 * rather than a constant for easier testing. But also could be adjusted to
 * retrieve a configuration based on the environment in the future.
 *
 * @returns The scene configuration.
 */
const getSceneConfig = (): SceneConfig => ({
  defaultScene: SceneName.LAUNCH,
  scenes: {
    [SceneName.LAUNCH]: {
      component: LaunchScene,
      markerUrl: 'assets/patt.hiro',
      nextSceneTransition: {
        toScene: SceneName.CRUISE,
        buttonText: 'Launch'
      }
    },
    [SceneName.CRUISE]: {
      component: CruiseScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Back'
      }
    }
  },
  cameraParametersUrl: 'assets/camera_para.dat'
});

export default getSceneConfig;
