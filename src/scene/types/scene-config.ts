import { SceneComponent } from './scene-component.ts';
import SceneName from './scene-name.ts';

interface IndividualSceneConfig {
  component: SceneComponent;
  markerUrl: string;
}

/**
 * Configuration for the scene feature
 */
export interface SceneConfig {
  // The initial scene to render
  defaultScene: SceneName;
  // All the available scenes
  scenes: Record<SceneName, IndividualSceneConfig>;
  // Public URL of the camera parameters data file
  cameraParametersUrl: string;
}
