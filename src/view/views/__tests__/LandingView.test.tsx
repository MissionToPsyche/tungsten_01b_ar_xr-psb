import { mockResizeObserver } from 'jsdom-testing-mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import LandingView from '../LandingView.tsx';
import { expect, vi } from 'vitest';
import ViewName from '../../types/view-name.ts';
import axe from 'axe-core';

mockResizeObserver();
vi.mock('../../../audio/use-audio.ts');
vi.mock('../../../settings/use-settings.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const changeView = vi.fn();

const setup = () => render(<LandingView changeView={changeView} />);

describe('<LandingView/>', () => {
  it('should render the intro text', () => {
    setup();

    expect(
      screen.getByText('Ready for an interstellar adventure?', { exact: false })
    ).toBeInTheDocument();
  });

  it('should call changeView when the launch button is clicked', () => {
    setup();

    fireEvent.click(
      screen.getByText('Start Mission Timeline', { selector: 'button' })
    );

    expect(changeView).toHaveBeenCalledWith(ViewName.AR_SCENES);
  });

  it('should have no accessibility violations', async () => {
    const { container } = setup();

    const results = await axe.run(container);

    expect(results.violations.length).toEqual(0);
  });
});
