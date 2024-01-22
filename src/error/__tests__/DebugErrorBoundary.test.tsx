import { render, screen } from '@testing-library/react';
import React from 'react';
import DebugErrorBoundary from '../DebugErrorBoundary.tsx';

const Child: React.FC<{ throwError?: Error }> = ({ throwError }) => {
  if (throwError) {
    throw throwError;
  }

  return <p>DebugErrorBoundaryChild</p>;
};

const setup = (throwError?: Error) =>
  render(
    <DebugErrorBoundary>
      <Child throwError={throwError} />
    </DebugErrorBoundary>
  );

describe('<DebugErrorBoundary/>', () => {
  it('should render the children if there is no error', () => {
    setup();

    expect(screen.getByText('DebugErrorBoundaryChild')).toBeInTheDocument();
  });

  it('should render the error information if there is an error', () => {
    setup(new Error('DebugErrorBoundaryError'));

    expect(screen.getByText('DebugErrorBoundaryError')).toBeInTheDocument();
  });
});
