import getViewConfig from '../get-view-config.ts';
import { expect } from 'vitest';

describe('getViewConfig', () => {
  it('should return the static view configuration', () => {
    const actual = getViewConfig();
    expect(actual).not.toBeNull();
  });
});
