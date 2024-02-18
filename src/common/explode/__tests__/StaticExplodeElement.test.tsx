import { render, screen } from '@testing-library/react';
import useExplode from '../use-explode.ts';
import { vi } from 'vitest';
import StaticExplodeElement from '../StaticExplodeElement.tsx';
import { SpringValue } from '@react-spring/three';

vi.mock('../use-explode.ts');

const child = vi.fn(() => <p>StaticExplodeElement Child</p>);

const setup = () =>
  render(
    <StaticExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[1, 1, 1]}
      startRotation={[0, 0, 0]}
      explodedRotation={[1, 1, 1]}
    >
      {child}
    </StaticExplodeElement>
  );

describe('<StaticExplodeElement/>', () => {
  it('should render the provided children', () => {
    setup();

    expect(screen.getByText('StaticExplodeElement Child')).toBeInTheDocument();
  });

  it('should start at the start rotation and position', () => {
    setup();

    const [isExploded, position, rotation] = child.mock.calls[0] as unknown as [
      boolean,
      SpringValue,
      SpringValue
    ];
    expect(isExploded).toEqual(false);
    expect(position.get()).toEqual([0, 0, 0]);
    expect(rotation.get()).toEqual([0, 0, 0]);
  });

  it('should move to the exploded position and rotation if exploded', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isExploded: _, ...rest } = useExplode();
    vi.mocked(useExplode).mockReturnValueOnce({ isExploded: true, ...rest });

    setup();

    const [isExploded, position, rotation] = child.mock.calls[0] as unknown as [
      boolean,
      SpringValue,
      SpringValue
    ];
    expect(isExploded).toEqual(true);
    expect(position.get()).toEqual([1, 1, 1]);
    expect(rotation.get()).toEqual([1, 1, 1]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
