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
    image: '/assets/images/neutron-spectrometer_gamma-ray-spectrometer.png'
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
    image: '/assets/images/psyche-orbit.png'
  },
  psycheOrbitB: {
    title: 'Orbit B',
    fact: 'The spacecraft will orbit Psyche for 92 days (190 orbits) at B1 and 100 days (206 orbits) at B2, mapping the topography of the asteroid.',
    image: '/assets/images/psyche-orbit.png'
  },
  psycheOrbitC: {
    title: 'Orbit C',
    fact: 'The spacecraft will orbit Psyche for 100 days (333 orbits), performing gravity science.',
    image: '/assets/images/psyche-orbit.png'
  },
  psycheOrbitD: {
    title: 'Orbit D',
    fact: 'The spacecraft will orbit Psyche for 100 days (666 orbits), performing elemental mapping.',
    image: '/assets/images/psyche-orbit.png'
  },
  // Tutorial
  tooltip: {
    title: 'Tooltips',
    fact: 'This is a tooltip. You can click on them throughout the experience to learn more about the items in a scene.',
    image: '/assets/images/tooltip.png'
  }
};

export default missionFacts;
