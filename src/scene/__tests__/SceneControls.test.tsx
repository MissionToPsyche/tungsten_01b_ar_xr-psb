import { SceneTransitionConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { expect, vi } from 'vitest';
import SceneControls from '../SceneControls.tsx';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Suspense } from 'react';

vi.mock('../../settings/use-settings.ts');
vi.mock('../use-scene.ts');
vi.mock('../get-scene-config.ts');
vi.mock('../../animations/use-animation.ts');
vi.mock('../../preferences/use-preferences.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useBreakpointValue: vi.fn(() => 'sm'),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const onChangeScene = vi.fn();
const onRestart = vi.fn();

const mockNextSceneTransition: SceneTransitionConfig = {
  toScene: SceneName.LAUNCH,
  buttonText: 'NEXT'
};

const mockPrevSceneTransition: SceneTransitionConfig = {
  toScene: SceneName.CRUISE_PANELS,
  buttonText: 'PREV'
};

const setup = (
  nextTransition?: SceneTransitionConfig,
  prevTransition?: SceneTransitionConfig
) =>
  render(
    <Suspense>
      <SceneControls
        nextSceneTransition={nextTransition}
        previousSceneTransition={prevTransition}
        onChangeScene={onChangeScene}
        onRestart={onRestart}
        transitionToNext={false}
        transitionToPrev={false}
        transitioning={false}
      />
    </Suspense>
  );

describe('<SceneControls/>', () => {
  it('should render the next button if it is provided', async () => {
    setup(mockNextSceneTransition);

    await waitFor(() => {
      expect(screen.getByText('NEXT')).toBeInTheDocument();
    });
  });

  it('should render the prev button if it is provided', async () => {
    setup(undefined, mockPrevSceneTransition);

    await waitFor(() => {
      expect(screen.getByText('PREV')).toBeInTheDocument();
    });
  });

  it('should render both buttons if they are both provided', async () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    await waitFor(() => {
      expect(screen.getByText('NEXT')).toBeInTheDocument();
      expect(screen.getByText('PREV')).toBeInTheDocument();
    });
  });

  it('should callback onChangeScene when the prev button is clicked', async () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    const prevButton = await screen.findByText('PREV');
    fireEvent.click(prevButton);

    expect(onChangeScene).toHaveBeenCalledWith(mockPrevSceneTransition.toScene);
  });

  it('should callback onChangeScene when the next button is clicked', async () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    const nextButton = await screen.findByText('NEXT');
    fireEvent.click(nextButton);

    expect(onChangeScene).toHaveBeenCalledWith(mockNextSceneTransition.toScene);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
