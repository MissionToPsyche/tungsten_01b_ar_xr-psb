import { useContext } from 'react';
import ModalContext from './modal-context';

/**
 * Hook to retrieve the ModalContext
 */
function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw Error('Modal cannot be used outside of <ModalProvider>');
  }
  return context;
}

export default useModal;
