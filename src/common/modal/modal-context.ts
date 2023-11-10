import { createContext } from 'react';

/**
 * Context type for the modal
 */
interface ModalContextType {
  /**
   * Callback to set truthy value for the isOpen modal parameter
   */
  onOpen: () => void;
  /**
   *
   * @param body The text to use for the modal body
   */
  setModalBody: (body: string) => void;
  setModalTitle: (title: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
