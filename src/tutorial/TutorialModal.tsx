import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepStatus,
  Text,
  useSteps,
  VStack
} from '@chakra-ui/react';
import React, { Suspense } from 'react';
import LoaderUI from '../common/loader/LoaderUI.tsx';
import getTutorialConfig from './get-tutorial-config.ts';

const TutorialModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { steps } = getTutorialConfig();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length - 1
  });

  const {
    key: activeKey,
    component: CurrenPageComponent,
    description
  } = steps[activeStep];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setActiveStep(0);
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tutorial</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Text>{description}</Text>
            <Spacer />
            <Suspense fallback={<LoaderUI progress={50} height="150px" />}>
              <CurrenPageComponent />
            </Suspense>
            <Stepper size="sm" index={activeStep} colorScheme="magenta">
              {steps.map(({ label }, index) => (
                <Step
                  key={activeKey}
                  onClick={() => {
                    setActiveStep(index);
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <StepIndicator marginRight="1">
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink="1">
                      <StepDescription>{label}</StepDescription>
                    </Box>
                  </Box>
                </Step>
              ))}
            </Stepper>
            <Spacer />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TutorialModal;
