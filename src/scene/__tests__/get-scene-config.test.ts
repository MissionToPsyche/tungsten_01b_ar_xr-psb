import getSceneConfig from '../get-scene-config.ts';
import { expect } from 'vitest';

describe('getSceneConfig', () => {
  it('should return the static scene config', () => {
    const actual = getSceneConfig();

    expect(actual).not.toBeNull();
  });
});
