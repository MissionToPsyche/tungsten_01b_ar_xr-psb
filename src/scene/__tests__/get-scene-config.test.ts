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
    ).toEqual(SceneName.CRUISE_PANELS);
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
      actual.scenes[SceneName.CRUISE_PANELS].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_PANELS].previousSceneTransition?.toScene
    ).toEqual(SceneName.LAUNCH);
  });

  it('should configure the cruise panels scene as the next scene after launch', () => {
    const actual = getSceneConfig();

    expect(actual.scenes[SceneName.LAUNCH].nextSceneTransition).toBeDefined();
    expect(
      actual.scenes[SceneName.LAUNCH].nextSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE_PANELS);
  });

  it('should configure the cruise panels animation as the transition animation for the cruise panels scene', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_PANELS].nextSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_PANELS].nextSceneTransition?.animation
    ).toEqual(AnimationName.CRUISE_PANELS);
  });

  it('should configure the cruise panels scene as the previous scene before cruise thrusters', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_THRUSTERS].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_THRUSTERS].previousSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE_PANELS);
  });

  it('should configure the cruise thrusters scene as the next scene after cruise panels', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_PANELS].nextSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_PANELS].nextSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE_THRUSTERS);
  });

  it('should configure the cruise thruster animation as the transition animation for the cruise thrusters scene', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_THRUSTERS].nextSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_THRUSTERS].nextSceneTransition?.animation
    ).toEqual(AnimationName.CRUISE_THRUSTERS);
  });

  it('should configure the cruise thruster scene as the previous scene before cruise gravity assist', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_GRAVITY_ASSIST].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_GRAVITY_ASSIST].previousSceneTransition
        ?.toScene
    ).toEqual(SceneName.CRUISE_THRUSTERS);
  });

  it('should configure the cruise gravity-assist animation as the transition animation for the cruise gravity assist scene', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.CRUISE_GRAVITY_ASSIST].nextSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.CRUISE_GRAVITY_ASSIST].nextSceneTransition
        ?.animation
    ).toEqual(AnimationName.CRUISE_GRAVITY_ASSIST);
  });

  it('should configure the cruise gravity assist scene as the previous scene before orbit', () => {
    const actual = getSceneConfig();

    expect(
      actual.scenes[SceneName.ORBIT].previousSceneTransition
    ).toBeDefined();
    expect(
      actual.scenes[SceneName.ORBIT].previousSceneTransition?.toScene
    ).toEqual(SceneName.CRUISE_GRAVITY_ASSIST);
  });

  // TODO: Verify the rest of the transitions once we have those scenes in place
});
