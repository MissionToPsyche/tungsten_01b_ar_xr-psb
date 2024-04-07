import InformationItem from './InformationItem.tsx';
import {
  Accordion,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import React from 'react';

interface InformationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({
  isOpen,
  onClose
}) => {
  const freeSounds = {
    servo:
      'servo_sound_02.wav by Artninja -- https://freesound.org/s/705136/ -- License: Attribution 4.0',
    swish:
      'swish/whoosh 2 by JSilverSound -- https://freesound.org/s/568835/ -- License: Creative Commons 0',
    lazer:
      'Lazer Rifle Zoom In-Out Effect by Hybrid_V -- https://freesound.org/s/321216/ -- License: Attribution 4.0',
    spaceship:
      'Large Spaceship Pass 2.wav by Matt_G -- https://freesound.org/s/30347/ -- License: Sampling+'
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Credits</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Accordion allowToggle>
            <InformationItem title="Application Development" index={1}>
              <Text>
                This application is developed by:
                <OrderedList pl="4">
                  <ListItem>Ana Diru</ListItem>
                  <ListItem>Anthony Zigerelli</ListItem>
                  <ListItem>Avinaash Ghansam</ListItem>
                  <ListItem>David Casey</ListItem>
                </OrderedList>
              </Text>
            </InformationItem>
            <InformationItem title="Sponsors" index={2}>
              Special thanks to our sponsor:{' '}
              <Text as="span" fontWeight="bold">
                Arizona State University
              </Text>
              .
            </InformationItem>
            <InformationItem title="Ownership" index={3}>
              Owned and maintained by:{' '}
              <Text as="span" fontWeight="bold">
                Arizona State University
              </Text>
              .
            </InformationItem>
            <InformationItem title="Assets" index={4}>
              This application utilizes third-party resources to enrich its
              features and user experience. These resources are carefully
              curated from reputable sources. Below are the references for the
              utilized assets:
              <UnorderedList>
                <ListItem>
                  <a href="https://threejs.org/">Three.js</a>
                </ListItem>
                <ListItem>
                  <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
                    React-three-fiber
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://www.nasa.gov/audio-and-ringtones/">
                    NASA Sounds
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://freesound.org/">Other Sound Assets</a>
                  <UnorderedList>
                    {Object.entries(freeSounds).map((info) => (
                      <ListItem key={info as unknown as React.Key}>
                        <>
                          <p>{info}</p>
                        </>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </InformationItem>
            <InformationItem title="Disclaimer" index={4}>
              <Text>
                This work was created in partial fulfillment of Pennsylvania
                State University Capstone Course &quot;SWENG 480: Software
                Engineering Design & SWENG 481: Software Engineering Design
                II&quot;. The work is a result of the Psyche Student
                Collaborations component of NASA’s Psyche Mission{' '}
                <a href="https://psyche.asu.edu)">https://psyche.asu.edu</a>{' '}
                “Psyche: A Journey to a Metal World” [Contract number
                NNM16AA09C] is part of the NASA Discovery Program mission to
                solar system targets. Trade names and trademarks of ASU and NASA
                are used in this work for identification only. Their usage does
                not constitute an official endorsement, either expressed or
                implied, by Arizona State University or National Aeronautics and
                Space Administration. The content is solely the responsibility
                of the authors and does not necessarily represent the official
                views of ASU or NASA.
              </Text>
            </InformationItem>
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
