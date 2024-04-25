import { mockResizeObserver } from 'jsdom-testing-mocks';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LandingView from '../LandingView.tsx';
import { expect, vi } from 'vitest';
import ViewName from '../../types/view-name.ts';
import axe from 'axe-core';
import { Suspense } from 'react';

mockResizeObserver();
vi.mock('../../../audio/use-audio.ts');
vi.mock('../../../settings/use-settings.ts');
vi.mock('../../../preferences/use-preferences.ts');
vi.mock('../../../scene/use-scene.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const changeView = vi.fn();

const setup = () =>
  render(
    <Suspense>
      <LandingView changeView={changeView} />
    </Suspense>
  );

describe('<LandingView/>', () => {
  it('should render the intro text', async () => {
    setup();

    await waitFor(() => {
      expect(
        screen.getByText('Ready for an interstellar adventure?', {
          exact: false
        })
      ).toBeInTheDocument();
    });
  });

  it('should call changeView when the launch button is clicked', async () => {
    setup();

    const startButton = await screen.findByText('Start Mission Timeline', {
      selector: 'button'
    });
    fireEvent.click(startButton);

    expect(changeView).toHaveBeenCalledWith(ViewName.AR_SCENES);
  });

  it('should have no accessibility violations', async () => {
    const { container } = setup();

    const results = await axe.run(container);

    expect(results.violations.length).toEqual(0);
  });
});
