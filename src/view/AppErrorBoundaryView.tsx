import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TroubleshootingGuide from './TroubleshootingGuide.tsx';

interface AppErrorBoundaryViewProps {
  children: ReactNode;
}

function AppErrorBoundaryView({ children }: AppErrorBoundaryViewProps) {
  return (
    <ErrorBoundary
      FallbackComponent={TroubleshootingGuide}
      onError={(error, info) => {
        console.error('Error caught by boundary:', error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
export default AppErrorBoundaryView;
