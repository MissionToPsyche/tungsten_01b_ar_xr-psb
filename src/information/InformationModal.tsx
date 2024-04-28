import InformationItem from './InformationItem.tsx';
import {
  Accordion,
  Box,
  Icon,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import getInformationConfig from './get-information-config.tsx';

const InformationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { authors, attributions, disclaimers } = getInformationConfig();

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
                <UnorderedList pt={2}>
                  {authors.map(({ name, link }) => (
                    <ListItem key={name}>
                      <Link href={link} isExternal>
                        {name}{' '}
                        <Icon as={FaExternalLinkAlt as never} boxSize={3} />
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Text>
            </InformationItem>
            <InformationItem title="Sponsor" index={2}>
              Special thanks to our sponsor{' '}
              <Text as="span" fontWeight="bold">
                NASA Psyche Mission
              </Text>
              .
            </InformationItem>
            <InformationItem title="Ownership" index={3}>
              Owned and maintained by{' '}
              <Text as="span" fontWeight="bold">
                NASA Psyche Mission
              </Text>
              .
            </InformationItem>
            <InformationItem title="Attribution" index={4}>
              This application utilizes third-party resources to enrich its
              features and user experience. Below are the references for the
              utilized assets:
              <UnorderedList pt={2}>
                {attributions.map((asset) => (
                  <ListItem key={asset.name}>
                    <Link href={asset.link} isExternal>
                      {asset.name}{' '}
                      <Icon as={FaExternalLinkAlt as never} boxSize={3} />
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </InformationItem>
            <InformationItem title="Disclaimers" index={4}>
              {disclaimers.map(({ title, disclaimer }) => (
                <Box key={title} pt={2}>
                  <Text fontWeight="bold">{title}</Text>
                  <Text>{disclaimer}</Text>{' '}
                </Box>
              ))}
            </InformationItem>
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
