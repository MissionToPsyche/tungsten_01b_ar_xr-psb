import { expect, it, Mock, vi } from 'vitest';
import getSceneConfig from '../get-scene-config.ts';
import { SceneConfig } from '../types/scene-config.ts';
import SceneName from '../types/scene-name.ts';
import SceneManager from '../SceneManager.tsx';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { AnimationProvider } from '../../animations/AnimationProvider.tsx';
import { AudioProvider } from '../../audio/AudioProvider.tsx';

// The following mocks are required because they render things that are not compatible with ReactThreeTestRenderer
vi.mock('@artcom/react-three-arjs', () => ({
  ARCanvas: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('../../common/components/PersistentARMarker.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('../../common/loader/LoaderTracker.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('@react-three/drei', async () => ({
  ...(await vi.importActual<object>('@react-three/drei')),
  Text: (props: { children: string }) => <group name={props.children} />
}));
vi.mock('../../common/components/ModelOutliner.tsx', () => ({
  default: ({ children }: React.PropsWithChildren) => <>{children}</>
}));
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  Button: (props: Record<string, string>) => (
    <group {...props} name={props.children} />
  ),
  Stack: (props: Record<never, never>) => <group {...props} />
}));
vi.mock('../../common/components/Settings.tsx', () => ({
  default: ({
    onClick,
    children
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => <button onClick={onClick}>{children}</button>
}));
// End compatibility mocks

vi.mock('../get-scene-config.ts');
vi.mock('../../common/hooks/use-sync-ar-to-window-size.ts');

const mockConfig: SceneConfig = {
  defaultScene: SceneName.LAUNCH,
  scenes: {
    [SceneName.ASSEMBLY]: {
      component: () => <group name="assemble-scene" />,
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Next Scene'
      }
    },
    [SceneName.LAUNCH]: {
      component: () => <group name="launch-scene" />,
      markerUrl: '/hello',
      nextSceneTransition: {
        toScene: SceneName.CRUISE,
        buttonText: 'Next Scene'
      },
      previousSceneTransition: {
        toScene: SceneName.ASSEMBLY,
        buttonText: 'Prev Scene'
      }
    },
    [SceneName.CRUISE]: {
      component: () => <group name="cruise-scene" />,
      markerUrl: '/hello',
      previousSceneTransition: {
        toScene: SceneName.LAUNCH,
        buttonText: 'Prev Scene'
      }
    },
    [SceneName.ORBIT]: {
      component: () => <group name="orbit-scene" />,
      markerUrl: '/hello',
      previousSceneTransition: {
        toScene: SceneName.CRUISE,
        buttonText: 'Prev Scene'
      }
    }
  },
  cameraParametersUrl: '/hello',
  disableAr: false,
  disableAudio: true
};

(getSceneConfig as Mock).mockReturnValue(mockConfig);
const changeView = vi.fn();

const setup = () =>
  ReactThreeTestRenderer.create(
    <AudioProvider>
      <AnimationProvider>
        <SceneManager changeView={changeView} />
      </AnimationProvider>
    </AudioProvider>
  );

describe('<SceneManager/>', () => {
  it('should render the default scene initially', async () => {
    const renderer = await setup();

    expect(renderer.scene.findByProps({ name: 'launch-scene' })).toBeDefined();
  });

  it('should render the next scene when the next scene button is clicked', async () => {
    const renderer = await setup();

    await renderer.fireEvent(
      renderer.scene.findByProps({ name: 'Next Scene' }),
      'click'
    );

    expect(renderer.scene.findByProps({ name: 'cruise-scene' })).toBeDefined();
  });

  it('should render the previous scene when the next scene button is clicked', async () => {
    const renderer = await setup();

    await renderer.fireEvent(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer.scene.findByProps({ name: 'Next Scene' }).parent!,
      'click'
    );

    await renderer.fireEvent(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer.scene.findByProps({ name: 'Prev Scene' }).parent!,
      'click'
    );

    expect(renderer.scene.findByProps({ name: 'launch-scene' })).toBeDefined();
  });
});
