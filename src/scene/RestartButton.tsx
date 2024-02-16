// RestartButton.tsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { VscDebugRestart } from 'react-icons/vsc';

const RestartButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({
  onClick,
  disabled
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="gray"
      isDisabled={disabled}
      position="absolute"
      top={4}
      right={4}
    >
      <VscDebugRestart />
    </Button>
  );
};

export default RestartButton;
