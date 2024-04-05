import { useCallback } from 'react';
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
  const {
    arEnabled,
    audioEnabled,
    tooltipsEnabled,
    setArEnabled,
    setAudioEnabled,
    setTooltipsEnabled
  } = useSettings();

  const onChangeArToggle = useCallback(
    (isChecked: boolean) => {
      setArEnabled(isChecked);
    },
    [setArEnabled]
  );

  const onChangeAudioToggle = useCallback(
    (isChecked: boolean) => {
      setAudioEnabled(isChecked);
    },
    [setAudioEnabled]
  );

  const onChangeTooltipsToggle = useCallback(
    (isChecked: boolean) => {
      setTooltipsEnabled(isChecked);
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
          <VStack align="flex-start">
            <RenderIf shouldRender={!hideArButton}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="ar-toggle" mb="0">
                  Enable Augmented Reality
                </FormLabel>
                <Switch
                  id="ar-toggle"
                  isChecked={arEnabled}
                  onChange={(e) => {
                    onChangeArToggle(e.target.checked);
                  }}
                  style={{ marginLeft: 'auto' }}
                />
              </FormControl>
            </RenderIf>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="audio-toggle" mb="0">
                Enable Audio
              </FormLabel>
              <Switch
                id="audio-toggle"
                isChecked={audioEnabled}
                onChange={(e) => {
                  onChangeAudioToggle(e.target.checked);
                }}
                style={{ marginLeft: 'auto' }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="tooltips-toggle" mb="0">
                Enable Tooltips
              </FormLabel>
              <Switch
                id="tooltips-toggle"
                isChecked={tooltipsEnabled}
                onChange={(e) => {
                  onChangeTooltipsToggle(e.target.checked);
                }}
                style={{ marginLeft: 'auto' }}
              />
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
