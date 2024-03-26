import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { Vector3 } from 'three';

const mockConfig: SceneConfig = {
  defaultScene: SceneName.ASSEMBLY,
  cameraParametersUrl: '/hello',
  disableAr: false,
  defaultCameraPosition: new Vector3(0, 6, 18),
  markerXRotation: 0,
  scenes: {
    [SceneName.ASSEMBLY]: {
      component: () => 'Assembly Scene',
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Next Scene'
      },
      sceneTitle: 'Assembly',
      sceneDate: '2021'
    },
    [SceneName.ACOUSTIC_TESTING]: {
      component: () => 'Acoustic Testing Scene',
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Next Scene'
      },
      previousSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        buttonText: 'Prev Scene'
      },
      sceneTitle: 'Assembly',
      sceneDate: '2021'
    },
    [SceneName.LAUNCH]: {
      component: () => 'Launch Scene',
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.CRUISE_PANELS,
        buttonText: 'Next Scene'
      },
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Prev Scene'
      },
      sceneTitle: 'Launch',
      sceneDate: '2022'
    }
  } as unknown as SceneConfig['scenes']
} as SceneConfig;

const getSceneConfig = vi.fn(() => mockConfig);

export default getSceneConfig;
