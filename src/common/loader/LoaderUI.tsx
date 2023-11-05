import { Progress, Text, VStack } from '@chakra-ui/react';

/**
 * A component that displays the loading progress
 * @param progress The loading progress, a value between 0 and 100
 */
const LoaderUI = ({ progress }: { progress: number }) => (
  <VStack>
    <Progress
      width="full"
      hasStripe
      value={progress}
      size="lg"
      colorScheme="purple"
    />
    <Text color="darkPurple.900">Adding rocket fuel...</Text>
  </VStack>
);

export default LoaderUI;
