import { render, screen } from '@testing-library/react';
import AppErrorBoundary from '../AppErrorBoundary.tsx';

const ThrowError = () => {
  throw new Error('Poo');
};

const setup = (throwError = false) =>
  render(
    <AppErrorBoundary>
      {throwError ? <ThrowError /> : <div>AppErrorBoundary Child</div>}
    </AppErrorBoundary>
  );

describe('<AppErrorBoundary/>', () => {
  it('should render the children if no error is thrown', () => {
    setup();

    expect(screen.getByText('AppErrorBoundary Child')).toBeInTheDocument();
  });

  it('should render the troubleshooting guide if an error is thrown', () => {
    setup(true);

    expect(screen.getByText('Troubleshooting Guide')).toBeInTheDocument();
  });
});
