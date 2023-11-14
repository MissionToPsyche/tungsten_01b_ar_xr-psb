import missionFacts from './mission-facts';

/**
 * Retrieves the fact info for the specified model
 * @param name The key of the model
 * @returns The fact, which includes the title and text
 */
export function lookupFactByName(name: string) {
  if (!(name in missionFacts)) {
    throw Error('Unable to find fact for model "' + name + '"');
  }
  return missionFacts[name];
}
