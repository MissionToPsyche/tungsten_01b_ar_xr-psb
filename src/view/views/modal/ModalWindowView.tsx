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
import useSceneConfig from '../../../scene/utils/useSceneConfig.ts';

interface ModalViewWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalViewWindow({ isOpen, onClose }: ModalViewWindowProps) {
  const { disableAr } = useSceneConfig();
  const [isAROn, setAROn] = useState(!disableAr);
  const [isMusicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    setAROn(!disableAr);
  }, [disableAr, isOpen]);

  const handleARButtonClick = () => {
    setAROn((prev) => !prev);
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
              colorScheme={isAROn ? 'green' : 'red'}
              onClick={handleARButtonClick}
              isDisabled={disableAr}
              flex={1}
            >
              {isAROn ? 'AR is ON' : 'AR is OFF'}
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
