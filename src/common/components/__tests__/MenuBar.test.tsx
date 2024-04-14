import { fireEvent, render, screen } from '@testing-library/react';
import MenuBar from '../MenuBar.tsx';
import { vi } from 'vitest';
import { Suspense } from 'react';

vi.mock('../../../settings/use-settings.ts');
vi.mock('../../../scene/use-scene.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const onClickRestartButton = vi.fn();

const setup = () =>
  render(
    <Suspense>
      <MenuBar onClickRestartButton={onClickRestartButton} />
    </Suspense>
  );

describe('<MenuBar />', () => {
  it('should render the information modal when the information button is clicked', async () => {
    setup();

    const informationButton = await screen.findByLabelText(
      'Information & Credits'
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(informationButton.firstChild!);

    expect(screen.getByText('Credits')).toBeInTheDocument();
    expect(screen.getByText('Application Development')).toBeInTheDocument();
  });

  it('should render the settings modal when the settings button is clicked', async () => {
    setup();

    const settingsButton = await screen.findByLabelText('Settings');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(settingsButton.firstChild!);

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Enable Augmented Reality')).toBeInTheDocument();
  });

  it('should render the tutorial modal when the tutorial button is clicked', async () => {
    setup();

    const tutorialButton = await screen.findByLabelText('Tutorial');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(tutorialButton.firstChild!);

    expect(screen.getByText('Tutorial')).toBeInTheDocument();
  });

  it('should render the scene navigation modal when the scene navigation button is clicked', async () => {
    setup();

    const sceneNavigationButton = await screen.findByLabelText('Navigation');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(sceneNavigationButton.firstChild!);

    expect(screen.getByText('Scene Navigation')).toBeInTheDocument();
  });

  it('should call the onClickRestartButton prop when the restart button is clicked', async () => {
    setup();

    const restartButton = await screen.findByLabelText('Restart');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(restartButton.firstChild!);

    expect(onClickRestartButton).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
