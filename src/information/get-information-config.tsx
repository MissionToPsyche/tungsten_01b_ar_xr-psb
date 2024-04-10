import React from 'react';

interface AuthorConfig {
  name: string;
  link: string;
}

const authors: AuthorConfig[] = [
  {
    name: 'Ana Diru',
    link: 'https://github.com/ajd6735'
  },
  {
    name: 'Anthony Zigerelli',
    link: 'https://github.com/azigerelli'
  },
  {
    name: 'Avinaash Ghansam',
    link: 'https://github.com/AvinaashGhansam'
  },
  {
    name: 'David Casey',
    link: 'https://github.com/zlix12'
  }
];

interface AttributionConfig {
  name: string;
  link: string;
}

const attributions: AttributionConfig[] = [
  {
    name: 'Various Audio by NASA',
    link: 'https://www.nasa.gov/audio-and-ringtones/'
  },
  {
    name: 'servo_sound_02.wav by Artninja',
    link: 'https://freesound.org/s/705136/'
  },
  {
    name: 'swish/whoosh 2 by JSilverSound',
    link: 'https://freesound.org/s/568835/'
  },
  {
    name: 'Lazer Rifle Zoom In-Out Effect by Hybrid_V',
    link: 'https://freesound.org/s/321216/'
  },
  {
    name: 'Large Spaceship Pass 2.wav by Matt_G',
    link: 'https://freesound.org/s/30347/'
  }
];

interface DisclaimerConfig {
  title: string;
  disclaimer: React.ReactNode;
}

const disclaimers: DisclaimerConfig[] = [
  {
    title: 'Project',
    disclaimer: (
      <>
        This work was created in partial fulfillment of Pennsylvania State
        University Capstone Course &quot;SWENG 480: Software Engineering Design
        & SWENG 481: Software Engineering Design II&quot;. The work is a result
        of the Psyche Student Collaborations component of NASA’s Psyche Mission{' '}
        <a href="https://psyche.asu.edu)">https://psyche.asu.edu</a> “Psyche: A
        Journey to a Metal World” [Contract number NNM16AA09C] is part of the
        NASA Discovery Program mission to solar system targets. Trade names and
        trademarks of ASU and NASA are used in this work for identification
        only. Their usage does not constitute an official endorsement, either
        expressed or implied, by Arizona State University or National
        Aeronautics and Space Administration. The content is solely the
        responsibility of the authors and does not necessarily represent the
        official views of ASU or NASA.
      </>
    )
  },
  {
    title: 'Software Usage and Liability',
    disclaimer:
      'The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.'
  }
];

export interface InformationConfig {
  authors: AuthorConfig[];
  attributions: AttributionConfig[];
  disclaimers: DisclaimerConfig[];
}

const informationConfig: InformationConfig = {
  authors,
  attributions,
  disclaimers
};

const getInformationConfig = (): InformationConfig => informationConfig;

export default getInformationConfig;
