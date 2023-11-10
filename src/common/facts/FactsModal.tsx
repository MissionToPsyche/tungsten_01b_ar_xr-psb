import { ReactNode } from 'react';
import MissionFacts from './mission-facts';
import useModal from '../modal/use-modal';

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

  const modelInfo = lookupModelInfo(model);
  if (modelInfo == null) {
    throw Error('Unable to find model info for model ' + model);
  } else {
    setModalBody(modelInfo.fact);
    setModalTitle(modelInfo.title);
  }

  return <group onClick={onOpen}>{children}</group>;
}

export default FactsModal;

function lookupModelInfo(model: string) {
  return MissionFacts.find((fact) => fact.name == model);
}
