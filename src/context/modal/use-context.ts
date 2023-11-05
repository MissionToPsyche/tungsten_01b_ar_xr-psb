import { useContext } from 'react';
import ModalContext from './ModalContext';

/**
 * Hook to retrieve the ModalContext
 * @returns The modal context
 */
function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw Error('Modal cannot be used outside of ModalProvider.');
  }
  return context;
}

export default useModalContext;
