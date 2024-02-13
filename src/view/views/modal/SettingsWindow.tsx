import { useState, useEffect } from 'react';
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
import { SceneConfig } from '../../../scene/types/scene-config.ts';

interface SettingsWindowProps {
  isOpen: boolean;
  onClose: () => void;
  sceneConfig: SceneConfig;
  muteARButton?: boolean;
}

/**
 * SettingsWindow component for managing settings.
 *
 * @param {object} props - Component props
 * @param {boolean} props.isOpen - Indicates whether the modal is open.
 * @param {function} props.onClose - Function to call when closing the modal.
 * @param {boolean} [props.muteARButton] - Optional flag to control whether the AR button should be disabled.
 */
function SettingsWindow({
  isOpen,
  onClose,
  muteARButton
}: SettingsWindowProps) {
  const { arEnabled, toggleAR } = useSetting();
  const [isMusicEnabled, setMusicEnabled] = useState(false);
  const [arButtonDisabled, setArButtonDisabled] = useState(false);

  useEffect(() => {
    setArButtonDisabled(!arEnabled);
  }, [arEnabled]);

  const handleARButtonClick = () => {
    if (!muteARButton) {
      toggleAR();
    }
  };

  const handleMusicButtonClick = () => {
    setMusicEnabled((prev) => !prev);
  };

  const saveChangesAndClose = () => {
    onClose();
    setArButtonDisabled(true);
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
              disabled={arButtonDisabled || muteARButton}
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

export default SettingsWindow;
