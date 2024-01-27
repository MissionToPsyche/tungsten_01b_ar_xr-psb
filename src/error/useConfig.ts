import { useMemo } from 'react';
import { SceneConfig } from '../scene/types/scene-config.ts';
import SceneName from '../scene/types/scene-name.ts';
import LaunchScene from '../scene/scenes/LaunchScene.tsx';
import CruiseScene from '../scene/scenes/CruiseScene.tsx';
import CruiseScene2 from '../scene/scenes/OrbitScene.tsx';
import AnimationName from '../animations/types/animation-name.ts';
import AssemblyScene from '../scene/scenes/AssemblyScene.tsx';
import getBoolFromEnv from '../common/utils/get-bool-from-env.ts';
import getSceneNameFromEnv from '../scene/get-scene-name-from-env.ts';

const useConfig = (): SceneConfig => {
  const sceneConfig = useMemo(
    () => ({
      defaultScene: getSceneNameFromEnv(
        'VITE_DEFAULT_SCENE',
        SceneName.ASSEMBLY
      ),
      scenes: {
        [SceneName.ASSEMBLY]: {
          component: AssemblyScene,
          markerUrl: 'assets/patt.hiro',
          nextSceneTransition: {
            toScene: SceneName.LAUNCH,
            animation: AnimationName.ASSEMBLE,
            buttonText: 'Assemble'
          }
        },
        [SceneName.LAUNCH]: {
          component: LaunchScene,
          markerUrl: 'assets/patt.hiro',
          previousSceneTransition: {
            toScene: SceneName.ASSEMBLY,
            buttonText: 'Back'
          },
          nextSceneTransition: {
            toScene: SceneName.CRUISE,
            animation: AnimationName.LIFTOFF,
            buttonText: 'Launch'
          }
        },
        [SceneName.CRUISE]: {
          component: CruiseScene,
          markerUrl: 'assets/patt.hiro',
          previousSceneTransition: {
            toScene: SceneName.LAUNCH,
            buttonText: 'Back'
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
            buttonText: 'Back'
          }
        }
      },
      cameraParametersUrl: 'assets/camera_para.dat',
      disableAr: getBoolFromEnv('VITE_DISABLE_AR')
    }),
    []
  );

  return sceneConfig;
};

export default useConfig;
