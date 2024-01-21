import { vi } from 'vitest';
import getEnvVar from '../get-env-var.ts';
import getBoolFromEnv from '../get-bool-from-env.ts';

vi.mock('../get-env-var.ts');

describe('getBoolFromEnv', () => {
  it.each(['true', 'True', 'TRUE'])(
    'should return true if the env var is %s',
    (envVarValue) => {
      vi.mocked(getEnvVar).mockReturnValueOnce(envVarValue);

      expect(getBoolFromEnv('ABC')).toEqual(true);
    }
  );

  it.each([undefined, 'false', 'anything else'])(
    'should return false if the env var is %s',
    (envVarValue) => {
      vi.mocked(getEnvVar).mockReturnValueOnce(envVarValue);

      expect(getBoolFromEnv('ABC')).toEqual(false);
    }
  );
});
