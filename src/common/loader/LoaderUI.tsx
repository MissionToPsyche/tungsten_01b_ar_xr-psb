import {
  LayoutProps,
  Progress,
  SpaceProps,
  Text,
  VStack
} from '@chakra-ui/react';

/**
 * A component that displays the loading progress
 * @param progress The loading progress, a value between 0 and 100
 * @param height The height of the loader container
 * @param padding The padding of the loader container
 */
const LoaderUI = ({
  progress,
  height,
  padding
}: {
  progress: number;
  height?: LayoutProps['height'];
  padding?: SpaceProps['padding'];
}) => (
  <VStack height={height ?? '80vh'} justifyContent="center" padding={padding}>
    <Progress
      width="full"
      height="32px"
      hasStripe
      value={progress}
      size="lg"
      colorScheme="magenta"
      isAnimated
    />
    <Text color="darkPurple.900">Adding rocket fuel...</Text>
  </VStack>
);

export default LoaderUI;
