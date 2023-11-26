import missionFacts, { MissionFact } from './mission-facts.ts';

/**
 * Retrieves the fact info for the specified factName
 *
 * @param name The key of the factName
 * @returns The fact, which includes the title and text
 */
const lookupFactByName = (name: string): MissionFact => {
  if (!(name in missionFacts)) {
    throw Error(`Unable to find fact for factName "${name}"`);
  }

  return missionFacts[name];
};

export default lookupFactByName;
