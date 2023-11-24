import { vi } from 'vitest';

const onOpen = vi.fn();
const setModalTitle = vi.fn();
const setModalBody = vi.fn();

const useModal = vi.fn(() => ({
  onOpen,
  setModalBody,
  setModalTitle
}));

export default useModal;
