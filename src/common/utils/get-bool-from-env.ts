import getEnvVar from './get-env-var.ts';

/**
 * Gets a boolean from the environment, returning true if it is "true" not respective of casing.
 * @param envVarName The environment variable to evaluate.
 */
const getBoolFromEnv = (envVarName: string): boolean => {
  const envVal = getEnvVar(envVarName);

  if (!envVal) {
    return false;
  }

  return envVal.toLowerCase() === 'true';
};

export default getBoolFromEnv;
