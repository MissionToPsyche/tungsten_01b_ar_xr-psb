/**
 * Type representing the composition of a Mission Fact
 */
interface MissionFact {
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
    fact: 'Falcon Heavy is a partially reusable super heavy-lift launch vehicle \
    that can carry cargo into Earth orbit, and beyond. It is designed, manufactured \
    and launched by American aerospace company SpaceX.'
  },
  launch: {
    title: 'The Launch 🚀',
    fact: "Psyche successfully launched at 10:19 a.m. EDT Friday, October 13, 2023 \
    aboard a SpaceX Falcon Heavy rocket from Launch Pad 39A at NASA's Kennedy Space \
    Center in Florida."
  }
};

export default missionFacts;
