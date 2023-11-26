import { mockResizeObserver } from 'jsdom-testing-mocks';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import LandingView from '../LandingView.tsx';
import { expect, vi } from 'vitest';
import ViewName from '../../types/view-name.ts';

mockResizeObserver();

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

    fireEvent.click(screen.getByText('Start Mission Timeline'));

    expect(changeView).toHaveBeenCalledWith(ViewName.AR_SCENES);
  });
});

afterEach(() => {
  cleanup();
});
