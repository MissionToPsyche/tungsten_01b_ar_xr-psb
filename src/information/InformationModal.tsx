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
                <OrderedList>
                  <ListItem>Ana Diru</ListItem>
                  <ListItem>Anthony Zigerelli</ListItem>
                  <ListItem>Avinaash Ghansam</ListItem>
                  <ListItem>David Casey</ListItem>
                </OrderedList>
              </Text>
            </InformationItem>
            <InformationItem title="Sponsors" index={2}>
              Special thanks to our sponsors:{' '}
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
                  <a href="https://github.com/pmndrs/react-spring">
                    react-spring/three
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://threejs.org/">Three.js</a>
                </ListItem>
                <ListItem>
                  <a href="https://www.nasa.gov/audio-and-ringtones/">
                    NASA Sound
                  </a>
                </ListItem>
              </UnorderedList>
            </InformationItem>
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
