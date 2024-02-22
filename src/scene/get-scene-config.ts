import { SceneConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import LaunchScene from './scenes/LaunchScene.tsx';
import CruiseScene2 from './scenes/OrbitScene.tsx';
import AnimationName from '../animations/types/animation-name.ts';
import AssemblyScene from './scenes/AssemblyScene.tsx';
import getBoolFromEnv from '../common/utils/get-bool-from-env.ts';
import getSceneNameFromEnv from './get-scene-name-from-env.ts';
import AcousticTestingScene from './scenes/AcousticTestingScene.tsx';
import VibrationTestingScene from './scenes/VibrationTestingScene.tsx';
import CruisePanelsScene from './scenes/CruisePanelsScene.tsx';
import CruiseThrusterScene from './scenes/CruiseThrusterScene.tsx';
import { Vector3 } from 'three';
import CruiseGravityAssistScene from './scenes/CruiseGravityAssistScene.tsx';

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
        buttonText: 'Assemble Orbiter'
      }
    },
    [SceneName.LAUNCH]: {
      component: LaunchScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Back to Assembly'
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        animation: AnimationName.LIFTOFF,
        buttonText: 'Launch Rocket',
        audio: 'sounds/launch.wav'
      }
    },
    [SceneName.CRUISE_PANELS]: {
      component: CruisePanelsScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Back to Launch'
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_THRUSTERS,
        buttonText: 'Open Solar Panels',
        animation: AnimationName.CRUISE_PANELS
      }
    },
    [SceneName.CRUISE_THRUSTERS]: {
      component: CruiseThrusterScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        buttonText: 'Back to Panels'
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_GRAVITY_ASSIST,
        buttonText: 'Start Thrusters',
        animation: AnimationName.CRUISE_THRUSTERS
      }
    },
    [SceneName.CRUISE_GRAVITY_ASSIST]: {
      component: CruiseGravityAssistScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_THRUSTERS,
        buttonText: 'Back to Thrusters'
      },
      nextSceneTransition: {
        toScene: SceneName.ORBIT,
        buttonText: 'Mars Gravity Assist',
        animation: AnimationName.CRUISE_GRAVITY_ASSIST
      }
    },
    [SceneName.ORBIT]: {
      component: CruiseScene2,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_GRAVITY_ASSIST,
        buttonText: 'Back to Gravity Assist'
      }
    }
  },
  cameraParametersUrl: 'assets/camera_para.dat',
  defaultCameraPosition: defaultCameraPosition,
  disableAr: getBoolFromEnv('VITE_DISABLE_AR'),
  markerXRotation: 0
});

export default getSceneConfig;
