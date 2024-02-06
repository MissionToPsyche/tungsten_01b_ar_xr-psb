import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex
} from '@chakra-ui/react';
import useSetting from './use-settings.ts';

/**
 * ModalViewWindow Component
 *
 * This component renders a modal window for adjusting settings such as AR and Music.
 * It utilizes Chakra UI components and custom hooks for managing settings.
 *
 * @param isOpen - A boolean indicating whether the modal is open or closed.
 * @param onClose - A function to handle closing the modal.
 *
 * @returns JSX element representing the modal window.
 */
interface ModalViewWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalViewWindow({ isOpen, onClose }: ModalViewWindowProps) {
  const { arEnabled, toggleAR } = useSetting();
  const [isMusicEnabled, setMusicEnabled] = useState(false);

  const handleARButtonClick = () => {
    toggleAR();
  };

  const handleMusicButtonClick = () => {
    setMusicEnabled((prev) => !prev);
  };

  const saveChangesAndClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={saveChangesAndClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="space-between">
            <Button
              colorScheme={arEnabled ? 'green' : 'red'}
              onClick={handleARButtonClick}
              flex={1}
            >
              {arEnabled ? 'AR is ON' : 'AR is OFF'}
            </Button>
            <Button
              colorScheme={isMusicEnabled ? 'green' : 'red'}
              onClick={handleMusicButtonClick}
              flex={1}
            >
              {isMusicEnabled ? 'Music is Enabled' : 'Music is Disabled'}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalViewWindow;
