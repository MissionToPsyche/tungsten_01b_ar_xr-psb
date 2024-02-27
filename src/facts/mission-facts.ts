/**
 * Type representing the composition of a Mission Fact
 */
export interface MissionFact {
  title: string;
  fact: string;
  image?: string;
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
    fact: 'Provides high-res images and metal-silicate discrimination.',
    image: '/assets/images/imager.png'
  },
  spectrometer: {
    title: 'Gamma-Ray and Neutron Spectrometer',
    fact: "Detects, measures and maps Psyche's elemental composition.",
    image: '/assets/images/spectrometer.png'
  },
  magnetometer: {
    title: 'Magnetometer',
    fact: 'Detects and measures the remanent magnetic field of Psyche.',
    image: '/assets/images/magnetometer.png'
  },
  xBandRadio: {
    title: 'X-band Radio Telecommunications System',
    fact: "Measures Psyche's gravity field to high precision.",
    image: '/assets/images/x-band.png'
  },
  opticalCommunication: {
    title: 'Deep Space Optical Communication',
    fact: 'Advanced communication tech that encodes data in photons.',
    image: '/assets/images/psyche-dsoc.jpg'
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
    fact: "The Falcon Heavy is the SpaceX's semi-reusable super heavy-lift launch vehicle, that transported the Psyche Aircraft into the space.",
    image: '/assets/images/falcon.jpg'
  },
  launch: {
    title: 'The Spacecraft Launches 🚀',
    fact: 'Psyche launched at 10:19 a.m. EDT Friday, October 13, 2023 aboard a SpaceX Falcon Heavy rocket from Launch Pad 39A at NASA’s Kennedy Space Center in Florida.'
  },
  // Cruise Scene
  marsDate: {
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
  },
  // Arrival/Orbit Scene
  psyche: {
    title: 'The Psyche Asteroid',
    fact: 'Psyche is an asteroid likely rich in metal, it may consist largely of metal from the core of a planetesimal.',
    image: '/assets/images/psyche-asteroid.png'
  },
  psycheCharacteristics: {
    title: 'Psyche Characteristics',
    fact: 'Psyche is 226 km (140 miles) in diameter, about the size of Massachusetts. It has an estimated density 3,400 to 4,100 kg/m³ and a surface area of 64,000 mi².',
    image: '/assets/images/psyche-asteroid.png'
  },
  psycheOrbitA: {
    title: 'Orbit A',
    fact: 'The spacecraft will orbit Psyche for 56 days (41 orbits), performing characterizations of the asteroid.',
    image: '/assets/images/psyche-orbit.svg'
  },
  psycheOrbitB: {
    title: 'Orbit B',
    fact: 'The spacecraft will orbit Psyche for 92 days (190 orbits) at B1 and 100 days (206 orbits) at B2, mapping the topography of the asteroid.',
    image: '/assets/images/psyche-orbit.svg'
  },
  psycheOrbitC: {
    title: 'Orbit C',
    fact: 'The spacecraft will orbit Psyche for 100 days (333 orbits), performing gravity science.',
    image: '/assets/images/psyche-orbit.svg'
  },
  psycheOrbitD: {
    title: 'Orbit D',
    fact: 'The spacecraft will orbit Psyche for 100 days (666 orbits), performing elemental mapping.',
    image: '/assets/images/psyche-orbit.svg'
  },
  orbitDate: {
    title: 'Arrival and Orbiting Psyche',
    fact: 'After arrival, the mission plan calls for mapping the asteroid and studying its properties. In each orbit, the instruments on board send data back to Earth to be analyzed by the mission’s science team.'
  }
};

export default missionFacts;
