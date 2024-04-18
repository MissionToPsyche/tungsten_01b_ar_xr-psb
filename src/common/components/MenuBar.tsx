import React, { lazy, useEffect, useMemo, useState } from 'react';

import {
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import { IoMdHelpCircle, IoMdNavigate, IoMdSettings } from 'react-icons/io';
import SettingsModal from '../../settings/SettingsModal.tsx';
import { VscDebugRestart } from 'react-icons/vsc';
import RenderIf from './RenderIf.tsx';
import { IoInformationCircle } from 'react-icons/io5';
import InformationModal from '../../information/InformationModal.tsx';
import SceneNavigationModal from '../../navigation/SceneNavigationModal.tsx';

const TutorialModal = lazy(() => import('../../tutorial/TutorialModal.tsx'));

const MenuBar: React.FC<{
  hideArButton?: boolean;
  hideRestartButton?: boolean;
  disableRestartButton?: boolean;
  onClickRestartButton?: () => void;
}> = ({
  hideArButton,
  hideRestartButton,
  disableRestartButton,
  onClickRestartButton
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const [animateTutorial, setAnimateTutorial] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);

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

  const {
    isOpen: sceneNavIsOpen,
    onOpen: onOpenSceneNav,
    onClose: onCloseSceneNav
  } = useDisclosure();

  const tutorialClicked = useMemo(() => {
    return localStorage.getItem('tutorialClicked') === 'true';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animateTutorial]);

  useEffect(() => {
    if (tutorialClicked) {
      setAnimateTutorial(false);
    } else {
      if (blinkCount < 4) {
        const interval = setInterval(() => {
          setAnimateTutorial((prev) => !prev);
          setBlinkCount((prev) => prev + 1);
        }, 100);

        return () => {
          clearInterval(interval);
        };
      } else {
        const timeout = setTimeout(() => {
          setBlinkCount(0);

          return () => {
            clearTimeout(timeout);
          };
        }, 2000);
      }
    }
  }, [blinkCount, tutorialClicked]);

  const tutorialButtonStyle = {
    transform: animateTutorial ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.1s ease-in-out'
  };

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
          aria-label="Information & Credits"
          icon={<IoInformationCircle size={24} onClick={onOpenInformation} />}
        />

        <IconButton
          isRound
          aria-label="Tutorial"
          transform="auto"
          scale={1.0}
          icon={<IoMdHelpCircle size={24} />}
          onClick={() => {
            localStorage.setItem('tutorialClicked', 'true');
            onOpenTutorial();
          }}
          style={tutorialButtonStyle}
        />

        <RenderIf shouldRender={!hideRestartButton}>
          <IconButton
            isRound
            aria-label="Navigation"
            icon={<IoMdNavigate size={24} />}
            onClick={onOpenSceneNav}
          />
        </RenderIf>
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
      <SceneNavigationModal isOpen={sceneNavIsOpen} onClose={onCloseSceneNav} />
    </>
  );
};

export default MenuBar;
