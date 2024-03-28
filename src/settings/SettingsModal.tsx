import React, { useCallback } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  VStack
} from '@chakra-ui/react';
import RenderIf from '../common/components/RenderIf.tsx';
import useSettings from './use-settings.ts';
import getBoolFromEnv from '../common/utils/get-bool-from-env.ts';
import SceneName from '../scene/types/scene-name.ts';
import useScene from '../scene/use-scene.ts';

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
  const { setCurrentScene } = useScene();

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
                <FormLabel htmlFor="ar-toggle" mb="0">
                  Enable Augmented Reality?
                </FormLabel>
                <Switch
                  id="ar-toggle"
                  isChecked={arEnabled}
                  onChange={onChangeArToggle}
                />
              </FormControl>
            </RenderIf>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="audio-toggle" mb="0">
                Enable Audio?
              </FormLabel>
              <Switch
                id="audio-toggle"
                isChecked={audioEnabled}
                onChange={onChangeAudioToggle}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="tooltips-toggle" mb="0">
                Enable Tooltips?
              </FormLabel>
              <Switch
                id="tooltips-toggle"
                isChecked={tooltipsEnabled}
                onChange={onChangeTooltipsToggle}
              />
            </FormControl>
            <RenderIf shouldRender={getBoolFromEnv('VITE_DEBUG_MODE')}>
              <Text as="b">Scene Navigation</Text>
              <Grid display="flow">
                {Object.keys(SceneName)
                  .filter(
                    (key) =>
                      isNaN(Number(SceneName[key as keyof typeof SceneName])) &&
                      SceneName[key as keyof typeof SceneName].toString() !=
                        'UNSET'
                  )
                  .map((key) => (
                    <Button
                      key={key}
                      width="50%"
                      fontSize="small"
                      onClick={() => {
                        setCurrentScene(Number(key));
                      }}
                    >
                      {SceneName[key as keyof typeof SceneName]}
                    </Button>
                  ))}
              </Grid>
            </RenderIf>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
