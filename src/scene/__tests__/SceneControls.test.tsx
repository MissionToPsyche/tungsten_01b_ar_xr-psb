import ReactThreeTestRenderer from '@react-three/test-renderer';
import SceneControls from '../SceneControls.tsx';
import { SceneTransitionConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import { expect } from 'vitest';
import { AnimationProvider } from '../../animations/AnimationProvider.tsx';

// The following mock is required because ReactThreeTestRenderer cannot render the <Text/> component
vi.mock('@react-three/drei', async () => ({
  ...(await vi.importActual<object>('@react-three/drei')),
  Text: (props: { children: string }) => <group name={props.children} />
}));

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
  ReactThreeTestRenderer.create(
    <AnimationProvider>
      <SceneControls
        nextSceneTransition={nextTransition}
        previousSceneTransition={prevTransition}
        onChangeScene={onChangeScene}
        onRestart={onRestart}
      />
    </AnimationProvider>
  );

describe('<SceneControls/>', () => {
  it('should render the next button if it is provided', async () => {
    const renderer = await setup(mockNextSceneTransition);

    expect(renderer.scene.findByProps({ name: 'NEXT' })).toBeDefined();
  });

  it('should render the prev button if it is provided', async () => {
    const renderer = await setup(undefined, mockPrevSceneTransition);

    expect(renderer.scene.findByProps({ name: 'PREV' })).toBeDefined();
  });

  it('should render both buttons if they are both provided', async () => {
    const renderer = await setup(
      mockNextSceneTransition,
      mockPrevSceneTransition
    );

    expect(renderer.scene.findByProps({ name: 'NEXT' })).toBeDefined();
    expect(renderer.scene.findByProps({ name: 'PREV' })).toBeDefined();
  });

  it('should callback onChangeScene when the prev button is clicked', async () => {
    const renderer = await setup(
      mockNextSceneTransition,
      mockPrevSceneTransition
    );

    await renderer.fireEvent(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer.scene.findByProps({ name: 'PREV' }).parent!,
      'click'
    );

    expect(onChangeScene).toHaveBeenCalledWith(mockPrevSceneTransition.toScene);
  });

  it('should callback onChangeScene when the next button is clicked', async () => {
    const renderer = await setup(
      mockNextSceneTransition,
      mockPrevSceneTransition
    );

    await renderer.fireEvent(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer.scene.findByProps({ name: 'NEXT' }).parent!,
      'click'
    );

    expect(onChangeScene).toHaveBeenCalledWith(mockNextSceneTransition.toScene);
  });
});
