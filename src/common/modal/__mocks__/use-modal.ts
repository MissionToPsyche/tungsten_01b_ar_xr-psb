import { vi } from 'vitest';

const open = vi.fn();

const useModal = vi.fn(() => ({
  open
}));

export default useModal;
