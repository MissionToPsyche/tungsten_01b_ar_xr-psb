import missionFacts from '../mission-facts.ts';
import { expect } from 'vitest';

describe('missionFacts', () => {
  it.each(Object.keys(missionFacts))(
    'fact %s should not contain more than 60 characters',
    (factKey) => {
      expect(missionFacts[factKey].fact.length).toBeLessThanOrEqual(100);
    }
  );
});
