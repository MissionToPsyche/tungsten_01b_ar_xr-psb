import getSceneConfig from '../get-scene-config.ts';
import { expect } from 'vitest';
import SceneName from '../types/scene-name.ts';

describe('getSceneConfig', () => {
  it('should return the static scene config', () => {
    const actual = getSceneConfig();

    expect(actual).not.toBeNull();
  });

  it('should configure the launch scene as the default scene', () => {
    // TODO: Update this test once we have the assembly/testing scene in
    const actual = getSceneConfig();

    expect(actual.defaultScene).toEqual(SceneName.LAUNCH);
  });

  it('should configure the cruise scene as the next scene after launch', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.LAUNCH].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.LAUNCH].nextSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE);
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
