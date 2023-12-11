import { createContext } from 'react';

/**
 * Context type for the modal
 */
interface ModalContextType {
  /**
   * Opens the modal with the given title and body
   * @param title The title to display
   * @param body The body to display
   */
  open: (title: string, body: string) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
