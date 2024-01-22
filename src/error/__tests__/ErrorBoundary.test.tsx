import ErrorBoundary from '../ErrorBoundary.tsx';
import React from 'react';
import { render, screen } from '@testing-library/react';

const Child: React.FC<{ throwError?: Error }> = ({ throwError }) => {
  if (throwError) {
    throw throwError;
  }

  return <p>ErrorBoundaryChild</p>;
};

const setup = (
  fallback:
    | React.ReactNode
    | ((error: Error, errorInfo: React.ErrorInfo) => React.ReactNode) = (
    <p>ErrorBoundaryFallback</p>
  ),
  throwError?: Error
) =>
  render(
    <ErrorBoundary fallback={fallback}>
      <Child throwError={throwError} />
    </ErrorBoundary>
  );

describe('<ErrorBoundary/>', () => {
  it('should render the children if there is no error', () => {
    setup();

    expect(screen.getByText('ErrorBoundaryChild')).toBeInTheDocument();
  });

  it('should render the fallback if there is an error', () => {
    setup(<p>ErrorBoundaryFallback</p>, new Error('ER'));

    expect(screen.getByText('ErrorBoundaryFallback')).toBeInTheDocument();
  });

  it('should call the fallback render function there is an error and fallback is a function', () => {
    setup((error) => <p>{error.message}</p>, new Error('ErrorBoundaryError'));

    expect(screen.getByText('ErrorBoundaryError')).toBeInTheDocument();
  });
});
