import { ReactNode } from 'react';
import useModal from '../modal/use-modal';
import { lookupFactByName } from './lookup-facts';

/**
 * This component makes a model clickable and updates the modal body with
 * the relevant model fact(s).
 */
function FactsModal({
  model,
  children
}: {
  model: string;
  children: ReactNode;
}) {
  const { onOpen, setModalBody, setModalTitle } = useModal();
  const modelInfo = lookupFactByName(model);

  const callBack = () => {
    setModalTitle(modelInfo.title);
    setModalBody(modelInfo.fact);
    onOpen();
  };
  return <group onClick={callBack}>{children}</group>;
}

export default FactsModal;
