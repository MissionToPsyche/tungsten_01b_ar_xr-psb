const value = {
  isExploded: false,
  removeExploding: vi.fn(),
  toggleExploded: vi.fn(),
  addExploding: vi.fn(),
  isAtRest: true
};

const useExplode = vi.fn(() => value);

export default useExplode;
