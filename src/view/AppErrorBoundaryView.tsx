import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallBack';

interface AppErrorBoundaryViewProps {
  children: ReactNode;
}

function AppErrorBoundaryView({ children }: AppErrorBoundaryViewProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error('Error caught by boundary:', error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
export default AppErrorBoundaryView;
