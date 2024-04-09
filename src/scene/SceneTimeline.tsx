import { useCallback, useMemo } from 'react';
import useSceneConfig from './use-scene-config.ts';
import useScene from './use-scene.ts';
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useBreakpointValue,
  useMediaQuery
} from '@chakra-ui/react';

interface StepConfig {
  title: string;
  description: string;
}

const SceneTimeline = () => {
  const config = useSceneConfig();
  const { currentSceneConfig } = useScene();

  const steps = useMemo(
    () =>
      Object.values(
        Object.values(config.scenes)
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          .filter((scene) => scene !== undefined)
          .map(({ sceneTitle, sceneDate }) => ({
            title: sceneTitle,
            description: sceneDate
          }))
          .reduce<Record<string, StepConfig>>((acc, step) => {
            acc[step.title] = step;
            return acc;
          }, {})
      ),
    [config.scenes]
  );

  const stepIndex = useMemo(
    () =>
      steps.findIndex(({ title }) => title === currentSceneConfig.sceneTitle),
    [currentSceneConfig.sceneTitle, steps]
  );

  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const timelineSize = useBreakpointValue({ base: 'sm', lg: 'lg' });

  const getStepStyle = useCallback(
    (currentIndex: number) => ({
      color: 'white',
      opacity: currentIndex === stepIndex ? 1 : 0.4
    }),
    [stepIndex]
  );

  return (
    <Box
      pos="absolute"
      left={isMobile ? 2 : 5}
      top={isMobile ? 2 : 5}
      width="200px"
      pointerEvents="none"
    >
      <Stepper
        index={stepIndex}
        orientation="vertical"
        colorScheme="magenta"
        color="white"
        opacity={1}
        size={timelineSize}
      >
        {steps.map((step, index) => (
          <Step key={index} style={getStepStyle(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber style={getStepStyle(index)} />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0" width={isMobile ? '100px' : '200px'}>
              <StepTitle style={getStepStyle(index)}>{step.title}</StepTitle>
              <StepDescription style={getStepStyle(index)}>
                {step.description}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SceneTimeline;
