import React from 'react';
import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoMdSettings } from 'react-icons/io';
import SettingsModal from '../../settings/SettingsModal.tsx';
import { VscDebugRestart } from 'react-icons/vsc';
import RenderIf from './RenderIf.tsx';
import { IoInformationCircle } from 'react-icons/io5';
import InformationModal from '../../information/InformationModal.tsx';

interface SettingsProps {
  hideArButton?: boolean;
  hideRestartButton?: boolean;
  disableRestartButton?: boolean;
  onClickRestartButton?: () => void;
}

const MenuBar: React.FC<SettingsProps> = ({
  hideArButton,
  hideRestartButton,
  disableRestartButton,
  onClickRestartButton
}) => {
  const {
    isOpen: settingsAreOpen,
    onOpen: onOpenSettings,
    onClose: onCloseSettings
  } = useDisclosure();

  const {
    isOpen: InformationAreOpen,
    onOpen: onOpenInformation,
    onClose: onCloseInformation
  } = useDisclosure();

  return (
    <>
      <HStack position="absolute" top={1} right={1}>
        <RenderIf shouldRender={!hideRestartButton}>
          <IconButton
            aria-label="Restart"
            icon={<VscDebugRestart />}
            onClick={onClickRestartButton}
            isDisabled={disableRestartButton}
          />
        </RenderIf>
        <IconButton
          aria-label="Settings"
          icon={<IoMdSettings size={24} />}
          onClick={onOpenSettings}
        />
        <IconButton
          aria-label={'Information & Credits'}
          icon={<IoInformationCircle size={24} onClick={onOpenInformation} />}
        />
      </HStack>
      <SettingsModal
        isOpen={settingsAreOpen}
        onClose={onCloseSettings}
        hideArButton={hideArButton}
      />
      <InformationModal
        isOpen={InformationAreOpen}
        onClose={onCloseInformation}
      />
    </>
  );
};

export default MenuBar;
