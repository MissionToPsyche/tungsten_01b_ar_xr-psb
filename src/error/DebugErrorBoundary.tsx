import React from 'react';
import ErrorBoundary from './ErrorBoundary.tsx';
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  Box,
  Code
} from '@chakra-ui/react';

const ErrorReportSection: React.FC<
  React.PropsWithChildren<{ heading: string }>
> = ({ heading, children }) => (
  <Box>
    <Heading size="xs" textTransform="uppercase">
      {heading}
    </Heading>
    <Text pt="2" fontSize="sm">
      {children}
    </Text>
  </Box>
);

const Fallback: React.FC<{ error: Error; errorInfo: React.ErrorInfo }> = ({
  error,
  errorInfo
}) => (
  <Card>
    <CardHeader>
      <Heading size="md">Error</Heading>
    </CardHeader>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <ErrorReportSection heading="Name">{error.name}</ErrorReportSection>
        <ErrorReportSection heading="Message">
          {error.message}
        </ErrorReportSection>
        <ErrorReportSection heading="Stack">
          <Code>{error.stack}</Code>
        </ErrorReportSection>
        <ErrorReportSection heading="Component Stack">
          <Code>{errorInfo.componentStack}</Code>
        </ErrorReportSection>
      </Stack>
    </CardBody>
  </Card>
);

/**
 * An error boundary that renders debug information for the caught error.
 * @param children The children to render if there is no error.
 */
const DebugErrorBoundary: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <ErrorBoundary
    fallback={(error, errorInfo) => (
      <Fallback error={error} errorInfo={errorInfo} />
    )}
  >
    {children}
  </ErrorBoundary>
);

export default DebugErrorBoundary;
