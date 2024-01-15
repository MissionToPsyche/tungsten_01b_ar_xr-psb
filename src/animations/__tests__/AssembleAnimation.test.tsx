import { render } from '@testing-library/react';
import AssembleAnimation from '../AssembleAnimation.tsx';
import useExplode from '../../common/explode/use-explode.ts';
import useAnimation from '../use-animation.ts';
import AnimationName from '../types/animation-name.ts';
import { describe, it, beforeEach, afterEach } from 'vitest';

vi.mock('../../common/explode/use-explode.ts');
vi.mock('../use-animation.ts');

const setup = () => render(<AssembleAnimation>Hello</AssembleAnimation>);

describe('<AssembleAnimation/>', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should render the provided children', () => {
    const { getByText } = setup();

    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('do nothing if the animation is not running', () => {
    vi.mocked(useAnimation().isAnimationActive).mockReturnValueOnce(false);

    setup();

    expect(useExplode().toggleExploded).not.toHaveBeenCalled();
  });

  it('toggle exploded if currently exploded and the animation is active', () => {
    vi.mocked(useAnimation().isAnimationActive).mockReturnValueOnce(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isExploded: _, ...rest } = useExplode();
    vi.mocked(useExplode).mockReturnValueOnce({ isExploded: true, ...rest });

    setup();

    expect(useExplode().toggleExploded).toHaveBeenCalled();
  });

  it('should stop the animation 1 second after the explode comes to rest', () => {
    vi.mocked(useAnimation().isAnimationActive).mockReturnValueOnce(true);

    setup();

    expect(useAnimation().stopAnimation).not.toHaveBeenCalledWith(
      AnimationName.ASSEMBLE
    );

    vi.advanceTimersByTime(1000);

    expect(useAnimation().stopAnimation).toHaveBeenCalledWith(
      AnimationName.ASSEMBLE
    );
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });
});
