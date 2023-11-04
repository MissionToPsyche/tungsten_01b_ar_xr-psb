import { useCallback } from 'react';
import { useState } from 'react';
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
import SceneLighting from '../../common/components/SceneLighting.tsx';
import { FalconHeavy } from '../../artifacts/FalconHeavy.tsx';
import { LaunchPad } from '../../artifacts/LaunchPad.tsx';

/**
 * Landing page for the application, informs the user about the application
 * and allows them to start it when ready.
 */
const LandingView: ViewComponent = ({ changeView }) => {
  const onClickStart = useCallback(() => {
    changeView(ViewName.AR_SCENES);
  }, [changeView]);

  const [isMouseOver, setMouseOver] = useState(false);

  function handleOnMouseOver() {
    setMouseOver(true);
  }

  function handleOnMouseOut() {
    setMouseOver(false);
  }

  return (
    <Flex height="82vh" flexDir="column" justifyContent="space-between" p={6}>
      <HStack divider={<StackDivider borderColor="#666666" />}>
        <Image src="/assets/images/nasa.svg" alt="NASA Logo" height="100px" />
        <Image
          src="/assets/images/Psyche_BadgeOutline_Color-SVG.svg"
          alt="Psyche Logo"
          height="100px"
        />
      </HStack>
      <Canvas style={{ height: '50vh' }} linear flat>
        <SceneLighting />
        <ModelSpinner position={[0, -5, -10]}>
          <FalconHeavy />
          <LaunchPad />
        </ModelSpinner>
      </Canvas>
      <Text fontSize="20" fontWeight="medium" color="#302244">
        Ready for an interstellar adventure? Tap
        <Text fontSize="24" as="span">
          &lsquo;Start Mission Timeline&rsquo;
        </Text>{' '}
        to explore NASA&apos;s Psyche Mission in Augmented Reality. We&apos;ll
        just need your camera permission to blast off!
      </Text>
      <Button
        height="20"
        width="xlg"
        color="white"
        style={{ backgroundColor: isMouseOver ? '#592651' : '#a53f5b' }}
        rightIcon={<FaRocket />}
        onClick={onClickStart}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        Start Misson Timeline
      </Button>
    </Flex>
  );
};

export default LandingView;
