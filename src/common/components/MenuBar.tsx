import React from 'react';

import {
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import { IoMdHelpCircle, IoMdSettings } from 'react-icons/io';
import SettingsModal from '../../settings/SettingsModal.tsx';
import { VscDebugRestart } from 'react-icons/vsc';
import RenderIf from './RenderIf.tsx';
import { IoInformationCircle } from 'react-icons/io5';
import InformationModal from '../../information/InformationModal.tsx';
import TutorialModal from '../../tutorial/TutorialModal.tsx';

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
  const [isMobile] = useMediaQuery('(max-width: 768px)');

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

  const {
    isOpen: tutorialIsOpen,
    onOpen: onOpenTutorial,
    onClose: onCloseTutorial
  } = useDisclosure();

  return (
    <>
      <HStack
        position="absolute"
        right={isMobile ? 2 : 5}
        top={isMobile ? 2 : 5}
      >
        <RenderIf shouldRender={!hideRestartButton}>
          <IconButton
            isRound
            aria-label="Restart"
            icon={<VscDebugRestart />}
            onClick={onClickRestartButton}
            isDisabled={disableRestartButton}
          />
        </RenderIf>
        <IconButton
          isRound
          aria-label="Settings"
          icon={<IoMdSettings size={24} />}
          onClick={onOpenSettings}
        />
        <IconButton
          isRound
          aria-label={'Information & Credits'}
          icon={<IoInformationCircle size={24} onClick={onOpenInformation} />}
        />
        <IconButton
          isRound
          aria-label="Tutorial"
          icon={<IoMdHelpCircle size={24} />}
          onClick={onOpenTutorial}
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
      <TutorialModal isOpen={tutorialIsOpen} onClose={onCloseTutorial} />
    </>
  );
};

export default MenuBar;
