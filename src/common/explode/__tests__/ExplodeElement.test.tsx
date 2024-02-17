import { render, screen, cleanup } from '@testing-library/react';
import ExplodeElement from '../ExplodeElement.tsx';
import useExplode from '../use-explode.ts';
import { vi } from 'vitest';

vi.mock('../use-explode.ts');

const setup = () =>
  render(
    <ExplodeElement
      startPosition={[0, 0, 0]}
      explodedPosition={[1, 1, 1]}
      startRotation={[0, 0, 0]}
      explodedRotation={[1, 1, 1]}
    >
      <p>ExplodeElement Child</p>
    </ExplodeElement>
  );

describe('<ExplodeElement/>', () => {
  it('should render the provided children', () => {
    setup();

    expect(screen.getByText('ExplodeElement Child')).toBeInTheDocument();
  });

  it('should start at the start rotation and position', () => {
    setup();

    const group = screen.getByText('ExplodeElement Child').parentElement;
    expect(group).toHaveAttribute('position', '0,0,0');
    expect(group).toHaveAttribute('rotation', '0,0,0');
  });

  it('should move to the exploded position and rotation if exploded', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isExploded: _, ...rest } = useExplode();
    vi.mocked(useExplode).mockReturnValueOnce({ isExploded: true, ...rest });

    setup();

    const group = screen.getByText('ExplodeElement Child').parentElement;
    expect(group).toHaveAttribute('position', '1,1,1');
    expect(group).toHaveAttribute('rotation', '1,1,1');
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });
});
