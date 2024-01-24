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
  children: React.ReactNode;
}> = ({ factName, children }) => {
  const { open } = useModal();
  const { title, fact } = lookupFactByName(factName);

  const onClick = useCallback(() => {
    open(title, fact);
  }, [open, title, fact]);

  return (
    <group onClick={onClick}>
      <Select enabled>{children}</Select>
    </group>
  );
};

export default FactsModalTrigger;
