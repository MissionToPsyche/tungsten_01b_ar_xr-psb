import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/react';
import ErrorBoundary from './ErrorBoundary.tsx';

/**
 * An error boundary that renders a non-descriptive alert if an error is caught.
 * @param children The children to render if there is no error.
 */
const AlertErrorBoundary: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <ErrorBoundary
    fallback={
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        flex={1}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          We are having trouble displaying this portion of the application.
        </AlertDescription>
      </Alert>
    }
  >
    {children}
  </ErrorBoundary>
);

export default AlertErrorBoundary;
