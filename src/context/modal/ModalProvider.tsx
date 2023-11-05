import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { PropsWithChildren, useState } from 'react';
import ModalContext from './ModalContext';

/**
 * This component serves as the modal context provider.
 */
export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  return (
    <>
      <ModalContext.Provider value={{ onOpen, setModalBody, setModalTitle }}>
        {children}
      </ModalContext.Provider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
