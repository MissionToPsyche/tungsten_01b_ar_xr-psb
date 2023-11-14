import { useCallback } from 'react';
import {
  Button,
  Flex,
  HStack,
  Image,
  StackDivider,
  Text
} from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import { ViewComponent } from '../types/view-component.ts';
import ViewName from '../types/view-name.ts';
import { Canvas } from '@react-three/fiber';
import ModelSpinner from '../../common/components/ModelSpinner.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/falcon-heavy-with-logos.tsx';
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
      <HStack divider={<StackDivider borderColor="#666666" />}>
        <Image src="/assets/images/nasa.svg" alt="NASA Logo" height="68px" />
        <Image
          src="/assets/images/psyche.svg"
          alt="Psyche Logo"
          height="68px"
        />
      </HStack>
      <Canvas style={{ height: '50vh' }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ModelSpinner position={[0, -8, -10]}>
          <FalconHeavyWithLogos scale={0.6} />
        </ModelSpinner>
      </Canvas>
      <Text fontSize="xl" fontWeight="medium" color="#302244">
        Ready for an interstellar adventure?{' '}
        <Text as="span" color="#A6405A">
          Tap &lsquo;Launch&rsquo;
        </Text>{' '}
        to explore NASA&apos;s Psyche mission in AR. We&apos;ll just need your
        camera permission to blast off!
      </Text>
      <Button size="lg" rightIcon={<FaRocket />} onClick={onClickStart}>
        Launch
      </Button>
    </Flex>
  );
};

export default LandingView;
