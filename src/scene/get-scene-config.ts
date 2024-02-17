import { SceneConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import LaunchScene from './scenes/LaunchScene.tsx';
import CruiseScene from './scenes/CruiseScene.tsx';
import CruiseScene2 from './scenes/OrbitScene.tsx';
import AnimationName from '../animations/types/animation-name.ts';
import AssemblyScene from './scenes/AssemblyScene.tsx';
import getBoolFromEnv from '../common/utils/get-bool-from-env.ts';
import getSceneNameFromEnv from './get-scene-name-from-env.ts';
import AcousticTestingScene from './scenes/AcousticTestingScene.tsx';
import VibrationTestingScene from './scenes/VibrationTestingScene.tsx';

import { Vector3 } from 'three';

const defaultCameraPosition = new Vector3(0, 6, 25);
/**
 * Function to get the scene configuration. Right now extracted into a method
 * rather than a constant for easier testing. But also could be adjusted to
 * retrieve a configuration based on the environment in the future.
 *
 * @returns The scene configuration.
 */
const getSceneConfig = (): SceneConfig => ({
  defaultScene: getSceneNameFromEnv(
    'VITE_DEFAULT_SCENE',
    SceneName.VIBRATION_TESTING
  ),
  scenes: {
    [SceneName.VIBRATION_TESTING]: {
      component: VibrationTestingScene,
      markerUrl: 'assets/patt.hiro',
      nextSceneTransition: {
        toScene: SceneName.ACOUSTIC_TESTING,
        animation: AnimationName.VIBRATION_TESTING,
        audio: 'sounds/knock.wav',
        buttonText: 'Vibration Test'
      }
    },
    [SceneName.ACOUSTIC_TESTING]: {
      component: AcousticTestingScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.VIBRATION_TESTING,
        buttonText: 'Vibration Test'
      },
      nextSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        animation: AnimationName.ACOUSTIC_TESTING,
        buttonText: 'Acoustic Test'
      }
    },
    [SceneName.ASSEMBLY]: {
      component: AssemblyScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.ACOUSTIC_TESTING,
        buttonText: 'Acoustic Test'
      },
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        animation: AnimationName.ASSEMBLE,
        audio: 'sounds/assemble.wav',
        buttonText: 'Assemble'
      }
    },
    [SceneName.LAUNCH]: {
      component: LaunchScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Assembly'
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE,
        animation: AnimationName.LIFTOFF,
        audio: 'sounds/launch.wav',
        buttonText: 'Launch'
      }
    },
    [SceneName.CRUISE]: {
      component: CruiseScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Launch'
      },
      nextSceneTransition: {
        toScene: SceneName.ORBIT,
        buttonText: 'Orbit'
      }
    },
    [SceneName.ORBIT]: {
      component: CruiseScene2,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE,
        buttonText: 'Orbit'
      }
    }
  },
  cameraParametersUrl: 'assets/camera_para.dat',
  defaultCameraPosition: defaultCameraPosition,
  disableAr: getBoolFromEnv('VITE_DISABLE_AR'),
  disableAudio: getBoolFromEnv('VITE_DISABLE_AUDIO')
});

export default getSceneConfig;
