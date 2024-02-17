import getSceneConfig from '../get-scene-config.ts';
import { expect, it } from 'vitest';
import SceneName from '../types/scene-name.ts';
import AnimationName from '../../animations/types/animation-name.ts';

describe('getSceneConfig', () => {
  it('should return the static scene config', () => {
    const actual = getSceneConfig();

    expect(actual).not.toBeNull();
  });

  it('should configure the assembly scene as the default scene', () => {
    const actual = getSceneConfig();

    expect(actual.defaultScene).toEqual(SceneName.VIBRATION_TESTING);
  });

  it('should configure the launch scene as the next scene after assembly', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.ASSEMBLY].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.ASSEMBLY].nextSceneTransition?.toScene
    ).toEqual(SceneName.LAUNCH);
  });

  it('should configure the assembly animation as the transition animation for the assembly scene', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.ASSEMBLY].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.ASSEMBLY].nextSceneTransition?.animation
    ).toEqual(AnimationName.ASSEMBLE);
  });

  it('should configure the assembly scene as the previous scene before launch', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.LAUNCH].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.LAUNCH].previousSceneTransition?.toScene
    ).toEqual(SceneName.ASSEMBLY);
  });

  it('should configure the cruise scene as the next scene after launch', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.LAUNCH].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.LAUNCH].nextSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE);
  });

  it('should configure the liftoff animation as the transition animation for the launch scene', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.LAUNCH].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.LAUNCH].nextSceneTransition?.animation
    ).toEqual(AnimationName.LIFTOFF);
  });

  it('should configure the launch scene as the previous scene before cruise', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE].previousSceneTransition?.toScene
    ).toEqual(SceneName.LAUNCH);
  });

  // TODO: Verify the rest of the transitions once we have those scenes in place
});
