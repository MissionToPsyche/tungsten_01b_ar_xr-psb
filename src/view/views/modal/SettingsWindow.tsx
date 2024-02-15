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

interface SettingsWindowProps {
  isOpen: boolean;
  onClose: () => void;
  arEnabled: boolean;
  toggleAR: () => void;
  muteARButton?: boolean;
}

function SettingsWindow({
  isOpen,
  onClose,
  arEnabled,
  toggleAR,
  muteARButton
}: SettingsWindowProps) {
  const [isMusicEnabled, setMusicEnabled] = useState(false);

  const handleARButtonClick = () => {
    if (!muteARButton) {
      toggleAR();
    }
  };

  const handleMusicButtonClick = () => {
    setMusicEnabled((prev) => !prev);
  };

  const closeModalWindow = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModalWindow} isCentered>
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
              isDisabled={muteARButton}
            >
              {arEnabled ? 'AR ON' : 'AR OFF'}
            </Button>
            <Button
              colorScheme={isMusicEnabled ? 'green' : 'red'}
              onClick={handleMusicButtonClick}
              flex={1}
            >
              {isMusicEnabled ? 'Enable Music' : 'Disable Music'}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SettingsWindow;
