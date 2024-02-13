import React, { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import { IconButton, Box } from '@chakra-ui/react';
import SettingsWindow from './SettingsWindow';
import getSceneConfig from '../../../scene/get-scene-config';

interface SettingsProps {
  muteARButton?: boolean;
}

const Settings: React.FC<SettingsProps> = ({ muteARButton }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const sceneConfig = getSceneConfig();

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <>
      <Box position="absolute" right="0rem">
        <IconButton
          aria-label="Settings"
          icon={
            <SettingsIcon
              boxSize={6}
              color="black.500"
              _hover={{ bg: 'rgb(178,69,99)' }}
            />
          }
          onClick={handleSettingsClick}
          backgroundColor="transparent"
          border="none"
          variant="unstyled"
          boxShadow="none"
          p={0}
        />
      </Box>
      {isSettingsOpen && (
        <SettingsWindow
          isOpen={isSettingsOpen}
          onClose={handleCloseSettings}
          sceneConfig={sceneConfig}
          muteARButton={muteARButton}
        />
      )}
    </>
  );
};

export default Settings;
