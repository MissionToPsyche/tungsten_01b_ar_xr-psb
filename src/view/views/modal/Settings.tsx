import React from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import { IoMdSettings } from 'react-icons/io';
import SettingsWindow from './SettingsWindow';
import useSetting from './use-settings.ts';

interface SettingsProps {
  muteARButton?: boolean;
}

const Settings: React.FC<SettingsProps> = ({ muteARButton }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { arEnabled, toggleAR } = useSetting();

  return (
    <>
      <Box position="absolute" right="0rem">
        <button
          aria-label="Settings"
          onClick={onOpen}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
            cursor: 'pointer',
            transition: 'color 0.3s',
            color: 'gray'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'red';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'inherit';
          }}
        >
          <IoMdSettings size={24} />
        </button>
      </Box>
      {isOpen && (
        <SettingsWindow
          isOpen={isOpen}
          onClose={onClose}
          arEnabled={arEnabled}
          toggleAR={toggleAR}
          muteARButton={muteARButton}
        />
      )}
    </>
  );
};

export default Settings;
