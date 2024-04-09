import { SceneConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import AnimationName from '../animations/types/animation-name.ts';
import getBoolFromEnv from '../common/utils/get-bool-from-env.ts';
import getSceneNameFromEnv from './get-scene-name-from-env.ts';
import { Vector3 } from 'three';
import artifactPaths from '../artifacts/artifact-paths.ts';
import { lazy } from 'react';

const LaunchScene = lazy(() => import('./scenes/LaunchScene.tsx'));
const AssemblyScene = lazy(() => import('./scenes/AssemblyScene.tsx'));
const AcousticTestingScene = lazy(
  () => import('./scenes/AcousticTestingScene.tsx')
);
const VibrationTestingScene = lazy(
  () => import('./scenes/VibrationTestingScene.tsx')
);
const CruisePanelsScene = lazy(() => import('./scenes/CruisePanelsScene.tsx'));
const CruiseThrusterScene = lazy(
  () => import('./scenes/CruiseThrusterScene.tsx')
);
const CruiseGravityAssistScene = lazy(
  () => import('./scenes/CruiseGravityAssistScene.tsx')
);
const PackOrbiterScene = lazy(() => import('./scenes/PackOrbiterScene.tsx'));
const OrbitScene = lazy(() => import('./scenes/OrbitScene.tsx'));

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
        buttonText: 'Assemble Orbiter'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021',
      artifactPaths: [artifactPaths.Orbiter]
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
        buttonText: 'Vibration Test'
      },
      sceneTitle: 'Assembly & Testing',
      sceneDate: '2021',
      artifactPaths: [artifactPaths.Orbiter]
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
      sceneDate: '2021',
      artifactPaths: [artifactPaths.Orbiter, artifactPaths.Amplifier]
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
      sceneDate: '2021',
      artifactPaths: [artifactPaths.PackOrbiter]
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
        buttonText: 'Launch Rocket'
      },
      sceneTitle: 'Launch',
      sceneDate: '2023',
      artifactPaths: [
        artifactPaths.LaunchPadModel,
        artifactPaths.FalconHeavyWithLogos
      ]
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
      sceneDate: '2024',
      artifactPaths: [artifactPaths.CruiseOrbiter, artifactPaths.Earth]
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
      sceneDate: '2024',
      artifactPaths: [artifactPaths.CruiseOrbiter, artifactPaths.Earth]
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
        animation: AnimationName.CRUISE_GRAVITY_ASSIST,
        audio: 'sounds/whoosh-fly.mp3'
      },
      sceneTitle: 'Cruise',
      sceneDate: '2026',
      artifactPaths: [artifactPaths.CruiseOrbiter, artifactPaths.Mars]
    },
    [SceneName.FIRST_ORBIT]: {
      component: OrbitScene,
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
      sceneDate: '2029',
      artifactPaths: [artifactPaths.OrbitOrbiter, artifactPaths.Psyche]
    },
    [SceneName.SECOND_ORBIT]: {
      component: OrbitScene,
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
      sceneDate: '2029',
      artifactPaths: [artifactPaths.OrbitOrbiter, artifactPaths.Psyche]
    },
    [SceneName.THIRD_ORBIT]: {
      component: OrbitScene,
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
      sceneDate: '2029',
      artifactPaths: [artifactPaths.OrbitOrbiter, artifactPaths.Psyche]
    },
    [SceneName.FOURTH_ORBIT]: {
      component: OrbitScene,
      markerUrl: 'assets/patt.hiro',
      previousSceneTransition: {
        toScene: SceneName.THIRD_ORBIT,
        buttonText: 'Back'
      },
      sceneTitle: 'Orbit',
      sceneDate: '2029',
      artifactPaths: [artifactPaths.OrbitOrbiter, artifactPaths.Psyche]
    }
  },
  cameraParametersUrl: 'assets/camera_para.dat',
  defaultCameraPosition: defaultCameraPosition,
  disableAr: getBoolFromEnv('VITE_DISABLE_AR'),
  markerXRotation: 0
});

export default getSceneConfig;
