/**
 * Returns the environment variable by name.
 * @param envVarName The name of the environment variable to evaluate.
 */
const getEnvVar = (envVarName: string): string | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return import.meta.env[envVarName];
};

export default getEnvVar;
