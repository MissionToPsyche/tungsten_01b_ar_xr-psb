import { createContext } from 'react';

interface ModalContextType {
  onOpen: () => void;
  setModalBody: (body: string) => void;
  setModalTitle: (title: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
