import React, { useCallback, useMemo } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Switch,
  Text,
  VStack
} from '@chakra-ui/react';
import RenderIf from '../common/components/RenderIf.tsx';
import useSettings from './use-settings.ts';
import SceneName from '../scene/types/scene-name.ts';
import useScene from '../scene/use-scene.ts';
import getEnumStringKeys from '../common/utils/get-enum-string-keys.ts';

interface SettingsWindowProps {
  isOpen: boolean;
  onClose: () => void;
  hideArButton?: boolean;
}

const SettingsModal = ({
  isOpen,
  onClose,
  hideArButton
}: SettingsWindowProps) => {
  const {
    arEnabled,
    audioEnabled,
    tooltipsEnabled,
    setArEnabled,
    setAudioEnabled,
    setTooltipsEnabled
  } = useSettings();
  const { currentScene, setCurrentScene } = useScene();

  const onChangeArToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setArEnabled(e.target.checked);
    },
    [setArEnabled]
  );

  const onChangeAudioToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAudioEnabled(e.target.checked);
    },
    [setAudioEnabled]
  );

  const onChangeTooltipsToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTooltipsEnabled(e.target.checked);
    },
    [setTooltipsEnabled]
  );

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
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <RenderIf shouldRender={!hideArButton}>
              <FormControl display="flex" alignItems="center">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  w="100%"
                >
                  <FormLabel htmlFor="ar-toggle" mb="0">
                    Enable Augmented Reality
                  </FormLabel>
                  <Switch
                    id="ar-toggle"
                    colorScheme="magenta"
                    isChecked={arEnabled}
                    onChange={onChangeArToggle}
                  />
                </Flex>
              </FormControl>
            </RenderIf>
            <FormControl display="flex" alignItems="center">
              <Flex justifyContent="space-between" alignItems="center" w="100%">
                <FormLabel htmlFor="audio-toggle" mb="0">
                  Enable Audio
                </FormLabel>
                <Switch
                  id="audio-toggle"
                  colorScheme="magenta"
                  isChecked={audioEnabled}
                  onChange={onChangeAudioToggle}
                />
              </Flex>
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <Flex justifyContent="space-between" alignItems="center" w="100%">
                <FormLabel htmlFor="tooltips-toggle" mb="0">
                  Enable Tooltips
                </FormLabel>
                <Switch
                  id="tooltips-toggle"
                  colorScheme="magenta"
                  isChecked={tooltipsEnabled}
                  onChange={onChangeTooltipsToggle}
                />
              </Flex>
            </FormControl>
            <Text as="b" pt={2}>
              Scene Navigation
            </Text>
            <SimpleGrid columns={1} spacing={2} w="full">
              {sceneNavigationButtons}
            </SimpleGrid>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
