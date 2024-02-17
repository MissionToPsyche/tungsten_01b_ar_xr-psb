import React, { useCallback } from 'react';
import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  VStack
} from '@chakra-ui/react';
import RenderIf from '../common/components/RenderIf.tsx';
import useSettings from './use-settings.ts';
import useAudio from '../audio/use-audio.ts';

interface SettingsWindowProps {
  isOpen: boolean;
  onClose: () => void;
  hideArButton?: boolean;
}

const SettingsWindow = ({
  isOpen,
  onClose,
  hideArButton
}: SettingsWindowProps) => {
  const { enabled: isAudioEnabled, setEnabled: setAudioEnabled } = useAudio();
  const { arEnabled, toggleAR } = useSettings();

  const onChangeArToggle = useCallback(() => {
    toggleAR();
  }, [toggleAR]);

  const onChangeAudioToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAudioEnabled(e.target.checked);
    },
    [setAudioEnabled]
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
                id="ar-audio"
                isChecked={isAudioEnabled}
                onChange={onChangeAudioToggle}
              />
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsWindow;
