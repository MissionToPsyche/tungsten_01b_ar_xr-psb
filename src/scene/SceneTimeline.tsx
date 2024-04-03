import { useMemo } from 'react';
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
  useBreakpointValue
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

  const isMobile = window.innerWidth < 768;
  const timelineSize = useBreakpointValue(
    { base: 'sm', lg: 'lg' },
    { ssr: false }
  );
  const customStyle = {
    color: 'white',
    opacity: (stepIndex: number, index: number) =>
      stepIndex === index ? 1 : 0.4
  };

  return (
    <Box
      pos="absolute"
      left={isMobile ? 2 : 10}
      top={isMobile ? 5 : 10}
      width="200px"
      pointerEvents="none"
      className="ck-reset"
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
          <Step
            key={index}
            style={{
              ...customStyle,
              opacity: customStyle.opacity(stepIndex, index)
            }}
          >
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={
                  <StepNumber
                    style={{
                      ...customStyle,
                      opacity: customStyle.opacity(stepIndex, index)
                    }}
                  />
                }
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0" width={isMobile ? '100px' : '200px'}>
              <StepTitle
                style={{
                  ...customStyle,
                  opacity: customStyle.opacity(stepIndex, index)
                }}
              >
                {step.title}
              </StepTitle>
              <StepDescription
                style={{
                  ...customStyle,
                  opacity: customStyle.opacity(stepIndex, index)
                }}
              >
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
