import React from 'react';
import TroubleshootingGuide from './TroubleshootingGuide.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

const AppErrorBoundary: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ErrorBoundary fallback={<TroubleshootingGuide />}>{children}</ErrorBoundary>
);

export default AppErrorBoundary;
