import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React, { PropsWithChildren, useCallback, useState } from 'react';
import ModalContext from './modal-context';

/**
 * Modal provider that manages displaying a modal that can be
 * toggled and modified by its children.
 */
const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const open = useCallback(
    (title: string, body: string) => {
      setModalTitle(title);
      setModalBody(body);
      onOpen();
    },
    [onOpen]
  );

  return (
    <>
      <ModalContext.Provider value={{ open }}>{children}</ModalContext.Provider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily="Helvetica" color="white" bg="magenta.700">
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton backgroundColor="white" />
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProvider;
