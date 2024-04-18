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
  useColorMode,
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
  const { colorMode, setColorMode } = useColorMode();

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

  const onChangeDarkModeToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setColorMode('dark');
      } else {
        setColorMode('light');
      }
    },
    [setColorMode]
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
            <FormControl display="flex" alignItems="center">
              <Flex justifyContent="space-between" alignItems="center" w="100%">
                <FormLabel htmlFor="dark-mode-toggle" mb="0">
                  Enable Dark Mode
                </FormLabel>
                <Switch
                  id="dark-mode-toggle"
                  colorScheme="magenta"
                  isChecked={colorMode === 'dark'}
                  onChange={onChangeDarkModeToggle}
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
