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
import React, { lazy, Suspense } from 'react';
import LoaderUI from '../common/loader/LoaderUI.tsx';

const TooltipTutorial = lazy(() => import('./views/TooltipTutorial'));
const ControlsTutorial = lazy(() => import('./views/ControlsTutorial'));
const SettingsTutorial = lazy(() => import('./views/SettingsTutorial'));
const Disclaimer = lazy(() => import('./views/Disclaimer'));

interface TutorialWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TutorialView {
  key: string;
  component: React.FC;
  description: string;
  label: string;
}

const steps: TutorialView[] = [
  {
    key: '0',
    component: TooltipTutorial,
    description: 'Tap the target below to view the tooltip.',
    label: 'Tooltips'
  },
  {
    key: '1',
    component: ControlsTutorial,
    description:
      'Drag and zoom to explore the scene objects. Note: Only works in Non-AR Mode.',
    label: 'Controls'
  },
  {
    key: '2',
    component: SettingsTutorial,
    description:
      'Use the menu bar to restart the experience, access the settings, view the credits or tutorial.',
    label: 'Settings'
  },
  {
    key: '3',
    component: Disclaimer,
    description:
      'The displayed models are designed to enrich the experience and are not depicted to real-world scale.',
    label: 'Disclaimer'
  }
];

const TutorialModal = ({ isOpen, onClose }: TutorialWindowProps) => {
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
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepDescription>{label}</StepDescription>
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
