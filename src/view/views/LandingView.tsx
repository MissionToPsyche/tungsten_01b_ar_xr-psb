import { useCallback, useMemo } from 'react';
import { Button, Flex, Highlight, Image, Text } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import { ViewComponent } from '../types/view-component.ts';
import ViewName from '../types/view-name.ts';
import { Canvas } from '@react-three/fiber';
import SceneLighting from '../../common/components/SceneLighting.tsx';
import LoaderProvider from '../../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../../common/loader/LoaderTracker.tsx';
import {
  Bounds,
  PerspectiveCamera,
  PresentationControls
} from '@react-three/drei';
import { TimeLine } from '../../artifacts/TimeLine.tsx';
import { useWindowSize } from '@uidotdev/usehooks';
import AlertErrorBoundary from '../../error/AlertErrorBoundary.tsx';
import MenuBar from '../../common/components/MenuBar.tsx';

/**
 * Landing page for the application, informs the user about the application
 * and allows them to start it when ready.
 */
const LandingView: ViewComponent = ({ changeView }) => {
  const windowSize = useWindowSize();

  const onClickStart = useCallback(() => {
    changeView(ViewName.AR_SCENES);
  }, [changeView]);

  const windowHeight = useMemo(
    () => windowSize.height ?? window.innerHeight,
    [windowSize.height]
  );

  return (
    <Flex height={`${windowHeight}px`} flexDir="column" p={6}>
      <MenuBar />
      <Image
        src="/assets/images/psyche-badge-outline-color.svg"
        alt="Psyche Logo"
        height="100px"
      />
      <AlertErrorBoundary>
        <LoaderProvider>
          <LoaderTracker />
          <Canvas style={{ flex: 1 }}>
            <SceneLighting />
            <directionalLight intensity={0.5} position={[8, 10, 40]} />
            <PerspectiveCamera makeDefault position={[0, 50, 200]} />
            <Bounds fit clip observe margin={1}>
              <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 3, Math.PI / 3]}
              >
                <TimeLine />
              </PresentationControls>
            </Bounds>
          </Canvas>
        </LoaderProvider>
      </AlertErrorBoundary>
      <Text fontSize={18} padding={4}>
        <Highlight
          query={['Start Mission Timeline', 'camera permission']}
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'magenta.100' }}
        >
          Ready for an interstellar adventure? Tap Start Mission Timeline to
          explore NASA&apos;s Psyche Mission in Augmented Reality. We&apos;ll
          just need your camera permission to blast off!
        </Highlight>
      </Text>
      <Button
        size="xl"
        colorScheme="magenta"
        rightIcon={<FaRocket />}
        onClick={onClickStart}
      >
        Start Mission Timeline
      </Button>
    </Flex>
  );
};

export default LandingView;
