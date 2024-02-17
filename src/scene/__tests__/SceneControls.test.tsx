import { SceneTransitionConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { expect } from 'vitest';
import { AnimationProvider } from '../../animations/AnimationProvider.tsx';
import SceneControls from '../SceneControls.tsx';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { AudioProvider } from '../../audio/AudioProvider.tsx';

const onChangeScene = vi.fn();
const onRestart = vi.fn();

const mockNextSceneTransition: SceneTransitionConfig = {
  toScene: SceneName.LAUNCH,
  buttonText: 'NEXT'
};

const mockPrevSceneTransition: SceneTransitionConfig = {
  toScene: SceneName.CRUISE,
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
    cleanup();
  });
});
