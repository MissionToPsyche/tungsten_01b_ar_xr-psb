import React, { useCallback } from 'react';
import {
  Flex,
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
                  isChecked={tooltipsEnabled}
                  onChange={onChangeTooltipsToggle}
                />
              </Flex>
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
