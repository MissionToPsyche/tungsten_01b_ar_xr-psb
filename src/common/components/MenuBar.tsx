import React from 'react';
import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoMdSettings } from 'react-icons/io';
import SettingsWindow from '../../settings/SettingsWindow.tsx';

interface SettingsProps {
  hideArButton?: boolean;
}

const MenuBar: React.FC<SettingsProps> = ({ hideArButton }) => {
  const {
    isOpen: settingsAreOpen,
    onOpen: onOpenSettings,
    onClose: onCloseSettings
  } = useDisclosure();

  return (
    <Box position="absolute" top={1} right={1}>
      <IconButton
        aria-label="Settings"
        icon={<IoMdSettings size={24} />}
        onClick={onOpenSettings}
      />
      <SettingsWindow
        isOpen={settingsAreOpen}
        onClose={onCloseSettings}
        hideArButton={hideArButton}
      />
    </Box>
  );
};

export default MenuBar;
