import {
  DarkMode,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure
} from '@chakra-ui/react';
import React, { PropsWithChildren, useCallback, useState } from 'react';
import ModalContext from './modal-context';
import RenderIf from '../components/RenderIf.tsx';

/**
 * Modal provider that manages displaying a modal that can be
 * toggled and modified by its children.
 */
const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalImage, setModalImage] = useState<string>();

  const open = useCallback(
    (title: string, body: string, image?: string) => {
      setModalTitle(title);
      setModalBody(body);
      setModalImage(image);
      onOpen();
    },
    [onOpen]
  );

  return (
    <>
      <ModalContext.Provider value={{ open }}>{children}</ModalContext.Provider>
      <DarkMode>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="white">{modalTitle}</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody color="white">
              {modalBody}
              <RenderIf shouldRender={!!modalImage}>
                <Spacer h={10} />
                <Image w="full" src={modalImage} alt={`${modalTitle} image`} />
              </RenderIf>
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  );
};

export default ModalProvider;
