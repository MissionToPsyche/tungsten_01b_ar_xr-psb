import React, { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import { IconButton, Box } from '@chakra-ui/react';
import SettingsWindow from './SettingsWindow'; // Import your SettingsWindow component
import getSceneConfig from '../../../scene/get-scene-config';

const Settings: React.FC = () => {
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
          icon={<SettingsIcon />}
          onClick={handleSettingsClick}
        />
      </Box>
      {isSettingsOpen && (
        <SettingsWindow
          isOpen={isSettingsOpen}
          onClose={handleCloseSettings}
          sceneConfig={sceneConfig}
        />
      )}
    </>
  );
};

export default Settings;
