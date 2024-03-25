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
  StepTitle
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

  return (
    <Box
      pos="absolute"
      left={2}
      top={2}
      bottom={20}
      width="200px"
      pointerEvents="none"
      className="ck-reset"
    >
      <Stepper
        index={stepIndex}
        orientation="vertical"
        colorScheme="red"
        color="white"
        opacity={0.75}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: '#c9c9c9' }}>
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
