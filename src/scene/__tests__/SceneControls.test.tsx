import { SceneTransitionConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { expect, vi } from 'vitest';
import { AnimationProvider } from '../../animations/AnimationProvider.tsx';
import SceneControls from '../SceneControls.tsx';
import { fireEvent, render, screen } from '@testing-library/react';
import { AudioProvider } from '../../audio/AudioProvider.tsx';

vi.mock('../../settings/use-settings.ts');
vi.mock('../use-scene.ts');
vi.mock('../get-scene-config.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useBreakpointValue: vi.fn(() => 'sm')
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
    <AudioProvider>
      <AnimationProvider>
        <SceneControls
          nextSceneTransition={nextTransition}
          previousSceneTransition={prevTransition}
          onChangeScene={onChangeScene}
          onRestart={onRestart}
          transitionToNext={false}
          transitionToPrev={false}
          transitioning={false}
        />
      </AnimationProvider>
    </AudioProvider>
  );

describe('<SceneControls/>', () => {
  it('should render the next button if it is provided', () => {
    setup(mockNextSceneTransition);

    expect(screen.getByText('NEXT')).toBeInTheDocument();
  });

  it('should render the prev button if it is provided', () => {
    setup(undefined, mockPrevSceneTransition);

    expect(screen.getByText('PREV')).toBeInTheDocument();
  });

  it('should render both buttons if they are both provided', () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    expect(screen.getByText('NEXT')).toBeInTheDocument();
    expect(screen.getByText('PREV')).toBeInTheDocument();
  });

  it('should callback onChangeScene when the prev button is clicked', () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    fireEvent.click(screen.getByText('PREV'));

    expect(onChangeScene).toHaveBeenCalledWith(mockPrevSceneTransition.toScene);
  });

  it('should callback onChangeScene when the next button is clicked', () => {
    setup(mockNextSceneTransition, mockPrevSceneTransition);

    fireEvent.click(screen.getByText('NEXT'));

    expect(onChangeScene).toHaveBeenCalledWith(mockNextSceneTransition.toScene);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
