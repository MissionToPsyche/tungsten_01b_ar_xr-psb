import React from 'react';
import ARButton from '../common/components/ARButton.tsx';
import { useToken } from '@chakra-ui/react';

/**
 * A button that triggers the restart of the timeline
 *
 * @param onClick Callback for when the button is clicked
 * @param props Props for the <group/> component
 */
const RestartTimelineButton: React.FC<
  Omit<JSX.IntrinsicElements['group'], 'onClick'> & {
    onClick: () => void;
  }
> = ({ onClick, ...props }) => {
  const onClickButton = () => {
    onClick();
  };

  const [bg, bgActive] = useToken('colors', ['gold.200', 'gold.100']);
  return (
    <ARButton
      backgroundColor={bg}
      backgroundActiveColor={bgActive}
      onClick={onClickButton}
      position={[0, -2, 0]}
      {...props}
    >
      {'Restart'}
    </ARButton>
  );
};

export default RestartTimelineButton;
