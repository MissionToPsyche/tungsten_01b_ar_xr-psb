const value = {
  registerAnimation: vi.fn(),
  isAnimationActive: vi.fn(),
  startAnimation: vi.fn(),
  stopAnimation: vi.fn()
};

const useAnimation = vi.fn(() => value);

export default useAnimation;
