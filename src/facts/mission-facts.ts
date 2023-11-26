/**
 * Type representing the composition of a Mission Fact
 */
export interface MissionFact {
  title: string;
  fact: string;
}

/**
 * The array of mission fact objects
 *
 * Each object contains the following properties:
 * name: The name of the clickable object within a scene
 * title: Optional title for the modal window
 * fact: The fact(s) to display when a user clicks on the object in the scene
 */
const missionFacts: Record<string, MissionFact> = {
  falconHeavy: {
    title: 'Falcon Heavy',
    fact: "The Falcon Heavy is SpaceX's semi-reusable, powerful rocket."
  },
  launch: {
    title: 'The Launch 🚀',
    fact: "Psyche launched on SpaceX's Falcon Heavy, Oct 13, 2023."
  }
};

export default missionFacts;
