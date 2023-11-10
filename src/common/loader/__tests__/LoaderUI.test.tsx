import { cleanup, render, screen } from '@testing-library/react';
import LoaderUI from '../LoaderUI.tsx';
import { expect } from 'vitest';

const setup = () => render(<LoaderUI progress={50} />);

describe('<LoaderUI/>', () => {
  it('should display the loading quip', () => {
    setup();

    expect(screen.getByText('Adding rocket fuel...')).toBeInTheDocument();
  });

  it('should render the loading bar', () => {
    setup();

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
  });

  it('should update the progress when it is changed', () => {
    const { rerender } = setup();

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    );

    rerender(<LoaderUI progress={75} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '75'
    );
  });

  afterEach(cleanup);
});
