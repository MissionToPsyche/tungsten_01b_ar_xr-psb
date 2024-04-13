import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import getEnumStringKeys from '../common/utils/get-enum-string-keys.ts';
import useScene from '../scene/use-scene.ts';
import SceneName from '../scene/types/scene-name.ts';

const SceneNavigationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { currentScene, setCurrentScene } = useScene();

  const sceneNavigationButtons = useMemo(
    () =>
      getEnumStringKeys(SceneName)
        .filter((key) => key !== 'UNSET')
        .map((key) => (
          <Button
            key={key}
            size="sm"
            textTransform="capitalize"
            colorScheme={currentScene === SceneName[key] ? 'magenta' : 'gray'}
            onClick={() => {
              setCurrentScene(SceneName[key]);
            }}
          >
            {key.replace(/_/g, ' ').toLowerCase()}
          </Button>
        )),
    [currentScene, setCurrentScene]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Scene Navigation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={1} spacing={2} w="full">
            {sceneNavigationButtons}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SceneNavigationModal;
