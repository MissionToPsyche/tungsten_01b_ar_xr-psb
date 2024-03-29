import InformationItem from './InformationItem.tsx';
import {
  Accordion,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface InformationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (isAccordionOpen === index) {
      setIsAccordionOpen(null);
    } else {
      setIsAccordionOpen(index);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Credits</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Accordion allowToggle>
            <InformationItem
              title="Application Development"
              index={1}
              isOpen={isAccordionOpen}
              onClick={handleAccordionClick}
            />
            <InformationItem
              title="Sponsors"
              index={2}
              isOpen={isAccordionOpen}
              onClick={handleAccordionClick}
            />
            <InformationItem
              title="Ownership"
              index={3}
              isOpen={isAccordionOpen}
              onClick={handleAccordionClick}
            />
            <InformationItem
              title="Assets"
              index={4}
              isOpen={isAccordionOpen}
              onClick={handleAccordionClick}
            />
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
