import SceneName from './types/scene-name.ts';
import getEnvVar from '../common/utils/get-env-var.ts';

/**
 * Gets a scene name from the environment.
 * @param envVarName The environment variable to evaluate.
 * @param fallback The fallback scene to use if the scene is not defined in the environment.
 */
const getSceneNameFromEnv = (
  envVarName: string,
  fallback: SceneName
): SceneName => {
  const envVal = getEnvVar(envVarName);

  if (!envVal) {
    return fallback;
  }

  return SceneName[envVal as keyof typeof SceneName];
};

export default getSceneNameFromEnv;
