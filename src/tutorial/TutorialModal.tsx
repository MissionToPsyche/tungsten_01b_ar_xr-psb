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
  StepStatus,
  Stepper,
  Text,
  VStack,
  useSteps
} from '@chakra-ui/react';
import TooltipTutorial from './views/TooltipTutorial';
import ControlsTutorial from './views/ControlsTutorial';
import SettingsTutorial from './views/SettingsTutorial';
import Disclaimer from './views/Disclaimer';

interface TutorialWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { description: 'Tooltips' },
  { description: 'Controls' },
  { description: 'Settings' },
  { description: 'Disclaimer' }
];

interface TutorialView {
  component: React.ReactNode;
  helpMessage: string;
}

const Pages: TutorialView[] = [
  {
    component: <TooltipTutorial key="0" />,
    helpMessage: 'Tap the target below'
  },
  {
    component: <ControlsTutorial key="1" />,
    helpMessage:
      'Drag and zoom to explore the scene objects. Note: Only works in Non-AR Mode.'
  },
  {
    component: <SettingsTutorial key="2" />,
    helpMessage:
      'Use the menu bar to restart the experience, access the settings, view the credits or tutorial.'
  },
  {
    component: <Disclaimer key="3" />,
    helpMessage:
      'The displayed models are designed to enrich the experience and are not depicted to real-world scale.'
  }
];

const TutorialModal = ({ isOpen, onClose }: TutorialWindowProps) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length - 1
  });

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
            <Text>{Pages[activeStep].helpMessage}</Text>
            <Spacer />
            {Pages[activeStep].component}

            <Stepper size="sm" index={activeStep} colorScheme="magenta">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                  }}
                >
                  <StepIndicator>
                    <StepStatus complete={<StepIcon />} />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepDescription>{step.description}</StepDescription>
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
