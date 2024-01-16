import { cleanup, fireEvent, render } from '@testing-library/react';
import ExplodeTrigger from '../ExplodeTrigger.tsx';
import useExplode from '../use-explode.ts';
import { describe, it, afterEach } from 'vitest';

vi.mock('../use-explode.ts');

const setup = () =>
  render(
    <ExplodeTrigger>
      <p>Hello</p>
    </ExplodeTrigger>
  );

describe('<ExplodeTrigger/>', () => {
  it('should render the provided children', () => {
    const { getByText } = setup();

    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should call toggle explode when clicked', () => {
    const { getByText } = setup();

    fireEvent.click(getByText('Hello'));

    expect(useExplode().toggleExploded).toHaveBeenCalled();
  });

  afterEach(() => {
    cleanup();
  });
});
