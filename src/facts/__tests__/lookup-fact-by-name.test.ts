import lookupFactByName from '../lookup-fact-by-name.ts';
import { expect } from 'vitest';
import missionFacts from '../mission-facts.ts';

describe('lookupFactByName', () => {
  it('should throw a descriptive error if the fact does not exist by name', () => {
    expect(() => lookupFactByName('does-not-exist')).toThrow(
      'Unable to find fact for factName "does-not-exist"'
    );
  });

  it('should return the fact corresponding to the name', () => {
    const key = Object.keys(missionFacts)[0];

    expect(lookupFactByName(key)).toEqual(missionFacts[key]);
  });
});
