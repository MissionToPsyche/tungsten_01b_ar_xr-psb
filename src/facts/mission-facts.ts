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
  // Assembly & Test Scene
  multiSpectralImager: {
    title: 'Multispectral Imager',
    fact: 'Provides high-res images and metal-silicate discrimination.'
  },
  spectrometer: {
    title: 'Gamma-Ray and Neutron Spectrometer',
    fact: "Detects, measures and maps Psyche's elemental composition."
  },
  magnetometer: {
    title: 'Magnetometer',
    fact: 'Detects and measures the remanent magnetic field of Psyche.'
  },
  xBandRadio: {
    title: 'X-band Radio Telecommunications System',
    fact: "Measures Psyche's gravity field to high precision."
  },
  opticalCommunication: {
    title: 'Deep Space Optical Communication',
    fact: 'Advanced communication tech that encodes data in photons.'
  },
  firstDateRange: {
    title: 'Psyche Mission Proposal and Concept Study',
    fact: 'NASA chose and gave approval to the Psyche Mission to develop an in-depth concept study.'
  },
  secondDateRange: {
    title: 'Preliminary Design of All Instruments and Spacecraft',
    fact: 'The science and engineering teams designed the spacecraft and asteroid analysis instruments.'
  },
  thirdDateRange: {
    title: 'Final Design and Subsystem Fabrication',
    fact: 'Science and engineering teams begin to build their instruments to complete the mission.'
  },
  fourthDateRange: {
    title: 'Instrument & Spacecraft Assembly and Test',
    fact: 'The spacecraft subsystems are assembled onto the spacecraft and subjected to thorough testing.'
  },
  // Launch Scene
  falconHeavy: {
    title: 'Falcon Heavy',
    fact: "The Falcon Heavy is SpaceX's semi-reusable, powerful rocket."
  },
  launch: {
    title: 'The Launch 🚀',
    fact: "Psyche launched on SpaceX's Falcon Heavy, Oct 13, 2023."
  },
  // Cruise Scene
  MarsDate: {
    title: 'Mars Gravity Assist',
    fact: "Harnessing Mars' gravity, Psyche will increase its velocity while minimizing propellant usage."
  },
  propulsion: {
    title: 'Solar Electric Propulsion',
    fact: 'Psyche uses Hall Effect thrusters that produce about 0.06 pounds of thrust.'
  },
  cruiseDate: {
    title: 'Are we there yet?',
    fact: 'Psyche began the cruise phase about 100 days after launch and will continue to fire its thrusters for more than 5 years.'
  },
  solarPanels: {
    title: 'Solar Panel Arrays',
    fact: 'Psyche relies on two five-panel solar arrays for power. The 800 square foot arrays unfurled shortly after leaving Earth.'
  }
};

export default missionFacts;
