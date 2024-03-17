import getSceneNameFromEnv from '../get-scene-name-from-env.ts';
import SceneName from '../types/scene-name.ts';
import getEnvVar from '../../common/utils/get-env-var.ts';

vi.mock('../../common/utils/get-env-var.ts');

describe('getSceneNameFromEnv', () => {
  it.each([
    [SceneName.ASSEMBLY, 'ASSEMBLY'],
    [SceneName.LAUNCH, 'LAUNCH'],
    [SceneName.CRUISE_PANELS, 'CRUISE_PANELS'],
    [SceneName.CRUISE_THRUSTERS, 'CRUISE_THRUSTERS'],
    [SceneName.CRUISE_GRAVITY_ASSIST, 'CRUISE_GRAVITY_ASSIST'],
    [SceneName.FIRST_ORBIT, 'FIRST_ORBIT'],
    [SceneName.SECOND_ORBIT, 'SECOND_ORBIT'],
    [SceneName.THIRD_ORBIT, 'THIRD_ORBIT'],
    [SceneName.FOURTH_ORBIT, 'FOURTH_ORBIT']
  ])(
    'should return %s when the environment variable is %s',
    (expected, envVarValue) => {
      vi.mocked(getEnvVar).mockReturnValueOnce(envVarValue);

      expect(
        getSceneNameFromEnv('VITE_DEFAULT_SCENE', undefined as never)
      ).toEqual(expected);
    }
  );

  it('should return the fallback when the environment variable is not defined', () => {
    vi.mocked(getEnvVar).mockReturnValueOnce(undefined);

    expect(
      getSceneNameFromEnv('VITE_DEFAULT_SCENE', SceneName.ASSEMBLY)
    ).toEqual(SceneName.ASSEMBLY);
  });
});
