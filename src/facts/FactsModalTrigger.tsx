import React, { useCallback } from 'react';
import useModal from '../common/modal/use-modal.ts';
import lookupFactByName from './lookup-fact-by-name.ts';

/**
 * This component makes the children clickable and updates the modal body with
 * the relevant fact(s) related to the provided factName.
 */
const FactsModalTrigger: React.FC<{
  factName: string;
  children: React.ReactNode;
}> = ({ factName, children }) => {
  const { onOpen, setModalBody, setModalTitle } = useModal();
  const modelInfo = lookupFactByName(factName);

  const onClick = useCallback(() => {
    setModalTitle(modelInfo.title);
    setModalBody(modelInfo.fact);
    onOpen();
  }, [modelInfo.fact, modelInfo.title, onOpen, setModalBody, setModalTitle]);

  return <group onClick={onClick}>{children}</group>;
};

export default FactsModalTrigger;
