import {
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          fontFamily="Helvetica"
          color="white"
          bg="magenta.700"
          alignItems={'center'}
          padding={8}
        >
          <ModalHeader alignItems={'center'} padding={8}>
            {modalTitle}
          </ModalHeader>
          <ModalCloseButton backgroundColor="white" />
          <ModalBody>
            {modalBody}
            <RenderIf shouldRender={!!modalImage}>
              <Spacer h={10} />
              <Image w="full" src={modalImage} alt={`${modalTitle} image`} />
            </RenderIf>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProvider;
