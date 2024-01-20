import { render, screen } from '@testing-library/react';
import React from 'react';
import AlertErrorBoundary from '../AlertErrorBoundary.tsx';

const Child: React.FC<{ throwError?: Error }> = ({ throwError }) => {
  if (throwError) {
    throw throwError;
  }

  return <p>AlertErrorBoundaryChild</p>;
};

const setup = (throwError?: Error) =>
  render(
    <AlertErrorBoundary>
      <Child throwError={throwError} />
    </AlertErrorBoundary>
  );

describe('<AlertErrorBoundary/>', () => {
  it('should render the children if there is no error', () => {
    setup();

    expect(screen.getByText('AlertErrorBoundaryChild')).toBeInTheDocument();
  });

  it('should render the error alert if there is an error', () => {
    setup(new Error('AlertErrorBoundaryError'));

    expect(
      screen.getByText(
        'We are having trouble displaying this portion of the application.'
      )
    ).toBeInTheDocument();
  });
});
