import { SceneConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import LaunchScene from './scenes/LaunchScene.tsx';
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
import PackOrbiterScene from './scenes/PackOrbiterScene.tsx';
import FirstOrbitScene from './scenes/FirstOrbit.tsx';
import SecondOrbitScene from './scenes/SecondOrbit.tsx';
import ThirdOrbitScene from './scenes/ThirdOrbit.tsx';
import FourthOrbitScene from './scenes/FourthOrbit.tsx';

const defaultCameraPosition = new Vector3(0, 6, 25);
/**
 * Function to get the scene configuration. Right now extracted into a method
 * rather than a constant for easier testing. But also could be adjusted to
 * retrieve a configuration based on the environment in the future.
 *
 * @returns The scene configuration.
 */
const getSceneConfig = (): SceneConfig => ({
  defaultScene: getSceneNameFromEnv('VITE_DEFAULT_SCENE', SceneName.ASSEMBLY),
  scenes: {
    [SceneName.UNSET]: undefined as never,
    [SceneName.ASSEMBLY]: {
      component: AssemblyScene,
      markerUrl: 'assets/patt.hiro',
      nextSceneTransition: {
        toScene: SceneName.VIBRATION_TESTING,
        animation: AnimationName.ASSEMBLE,
        audio: 'sounds/assemble.wav',
        buttonText: 'Assemble Orbiter'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021'
    },
    [SceneName.VIBRATION_TESTING]: {
      component: VibrationTestingScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        animation: AnimationName.BACK,
        buttonText: 'Back to Assemble'
      },
      nextSceneTransition: {
        toScene: SceneName.ACOUSTIC_TESTING,
        animation: AnimationName.VIBRATION_TESTING,
        audio: 'sounds/knock.wav',
        buttonText: 'Vibration Test'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021'
    },
    [SceneName.ACOUSTIC_TESTING]: {
      component: AcousticTestingScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.VIBRATION_TESTING,
        animation: AnimationName.BACK,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.PACK_ORBITER,
        animation: AnimationName.ACOUSTIC_TESTING,
        buttonText: 'Acoustic Test'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021'
    },
    [SceneName.PACK_ORBITER]: {
      component: PackOrbiterScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.ACOUSTIC_TESTING,
        animation: AnimationName.BACK,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        animation: AnimationName.PACK_ORBITER,
        buttonText: 'Pack Orbiter'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021'
    },
    [SceneName.LAUNCH]: {
      component: LaunchScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.PACK_ORBITER,
        buttonText: 'Back to Assembly',
        animation: AnimationName.BACK
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        animation: AnimationName.LIFTOFF,
        buttonText: 'Launch Rocket',
        audio: 'sounds/launch.wav'
      },
      sceneTitle: 'Launch',
      sceneDate: '2023'
    },
    [SceneName.CRUISE_PANELS]: {
      component: CruisePanelsScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Back to Launch',
        animation: AnimationName.BACK
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_THRUSTERS,
        buttonText: 'Open Solar Panels',
        animation: AnimationName.CRUISE_PANELS
      },
      sceneTitle: 'Initial Checkout',
      sceneDate: '2024'
    },
    [SceneName.CRUISE_THRUSTERS]: {
      component: CruiseThrusterScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        animation: AnimationName.BACK,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.CRUISE_GRAVITY_ASSIST,
        buttonText: 'Ignite Thrusters',
        animation: AnimationName.CRUISE_THRUSTERS
      },
      sceneTitle: 'Initial Checkout',
      sceneDate: '2024'
    },
    [SceneName.CRUISE_GRAVITY_ASSIST]: {
      component: CruiseGravityAssistScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_THRUSTERS,
        animation: AnimationName.BACK,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.FIRST_ORBIT,
        buttonText: 'Mars Assist',
        animation: AnimationName.CRUISE_GRAVITY_ASSIST
      },
      sceneTitle: 'Cruise',
      sceneDate: '2026'
    },
    [SceneName.FIRST_ORBIT]: {
      component: FirstOrbitScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.CRUISE_GRAVITY_ASSIST,
        animation: AnimationName.BACK,
        buttonText: 'Back to Cruise'
      },
      nextSceneTransition: {
        toScene: SceneName.SECOND_ORBIT,
        buttonText: 'Next Orbit'
      },
      sceneTitle: 'Orbit',
      sceneDate: '2029'
    },
    [SceneName.SECOND_ORBIT]: {
      component: SecondOrbitScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.FIRST_ORBIT,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.THIRD_ORBIT,
        buttonText: 'Next Orbit'
      },
      sceneTitle: 'Orbit',
      sceneDate: '2029'
    },
    [SceneName.THIRD_ORBIT]: {
      component: ThirdOrbitScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.SECOND_ORBIT,
        buttonText: 'Back'
      },
      nextSceneTransition: {
        toScene: SceneName.FOURTH_ORBIT,
        buttonText: 'Next Orbit'
      },
      sceneTitle: 'Orbit',
      sceneDate: '2029'
    },
    [SceneName.FOURTH_ORBIT]: {
      component: FourthOrbitScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.THIRD_ORBIT,
        buttonText: 'Back'
      },
      sceneTitle: 'Orbit',
      sceneDate: '2029'
    }
  },
  cameraParametersUrl: 'assets/camera_para.dat',
  defaultCameraPosition: defaultCameraPosition,
  disableAr: getBoolFromEnv('VITE_DISABLE_AR'),
  markerXRotation: 0
});

export default getSceneConfig;
