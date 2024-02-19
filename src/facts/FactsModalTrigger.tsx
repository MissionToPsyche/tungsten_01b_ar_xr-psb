import React, { useCallback } from 'react';
import useModal from '../common/modal/use-modal.ts';
import lookupFactByName from './lookup-fact-by-name.ts';
import { Select } from '@react-three/postprocessing';

/**
 * This component makes the children clickable and updates the modal body with
 * the relevant fact(s) related to the provided factName.
 */
const FactsModalTrigger: React.FC<{
  factName: string;
  disable?: boolean;
  children: React.ReactNode;
}> = ({ factName, disable, children }) => {
  const { open } = useModal();
  const { title, fact, image } = lookupFactByName(factName);

  const onClick = useCallback(() => {
    if (disable) {
      return;
    }

    open(title, fact, image);
  }, [disable, open, title, fact, image]);

  return (
    <group onClick={onClick}>
      <Select enabled={!disable}>{children}</Select>
    </group>
  );
};

export default FactsModalTrigger;
