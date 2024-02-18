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
  const { arEnabled, audioEnabled, setArEnabled, setAudioEnabled } =
    useSettings();

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
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
