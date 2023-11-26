import AnimationName from '../../animations/types/animation-name.ts';
import { SceneComponent } from './scene-component.ts';
import SceneName from './scene-name.ts';

/**
 * Configuration for a scene transition from the current scene
 */
export interface SceneTransitionConfig {
  // The scene to transition to
  toScene: SceneName;
  // The animation to play during transition
  animation?: AnimationName;
  // The text to show for the transition button
  buttonText: string;
}

/**
 * Configuration for an individual AR scene
 */
export interface IndividualSceneConfig {
  // The component to render for the scene
  component: SceneComponent;
  // The URL for the marker pattern
  markerUrl: string;
  // Optional configuration for the next scene that can be transitioned to
  nextSceneTransition?: SceneTransitionConfig;
  // Optional configuration for the previous scene that can be transitioned to
  previousSceneTransition?: SceneTransitionConfig;
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
