import getEnvVar from '../get-env-var.ts';

describe('getEnvVar', () => {
  it('should return the environment variable value', () => {
    vi.stubEnv('VITE_ENV_VAR', 'something');
    expect(getEnvVar('VITE_ENV_VAR')).toEqual('something');
  });
});
