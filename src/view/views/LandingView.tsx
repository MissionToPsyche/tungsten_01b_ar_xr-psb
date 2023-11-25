import { useCallback } from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import { ViewComponent } from '../types/view-component.ts';
import ViewName from '../types/view-name.ts';
import { Canvas } from '@react-three/fiber';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import SceneLighting from '../../common/components/SceneLighting.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import LoaderProvider from '../../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../../common/loader/LoaderTracker.tsx';
import filledVector from '../../common/utils/filled-vector.ts';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.tsx';

const falconScale = filledVector(0.3);

/**
 * Landing page for the application, informs the user about the application
 * and allows them to start it when ready.
 */
const LandingView: ViewComponent = ({ changeView }) => {
  const onClickStart = useCallback(() => {
    changeView(ViewName.AR_SCENES);
  }, [changeView]);

  return (
    <Flex height="82vh" flexDir="column" justifyContent="space-between" p={6}>
      <Image
        src="/assets/images/psyche-badge-outline-color.svg"
        alt="Psyche Logo"
        height="100px"
      />
      <LoaderProvider>
        <LoaderTracker />
        <Canvas style={{ height: '50vh' }} linear flat>
          <SceneLighting />
          <ModelSpinner position={[0, -6, -10]} speed={0.5}>
            <FactsModalTrigger factName="falconHeavy">
              <FalconHeavyWithLogos
                position={[3.3, 2.2, 0]}
                scale={falconScale}
              />
            </FactsModalTrigger>
            <LaunchPadModel position={[1.5, 1, 0]} scale={falconScale} />
          </ModelSpinner>
        </Canvas>
      </LoaderProvider>
      <Text fontSize="20" fontWeight="medium" color="#302244">
        Ready for an interstellar adventure? Tap
        <Text fontSize="24" as="span">
          &lsquo;Start Mission Timeline&rsquo;
        </Text>{' '}
        to explore NASA&apos;s Psyche Mission in Augmented Reality. We&apos;ll
        just need your camera permission to blast off!
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
