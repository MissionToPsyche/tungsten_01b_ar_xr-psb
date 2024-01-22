import React from 'react';

type ErrorBoundaryProps = React.PropsWithChildren<{
  fallback:
    | React.ReactNode
    | ((error: Error, errorInfo: React.ErrorInfo) => React.ReactNode);
}>;

interface ErrorBoundaryState {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

/**
 * An error boundary that renders the provided fallback if an error is caught in the component stack.
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (!this.state.error || !this.state.errorInfo) {
      return this.props.children;
    }

    if (typeof this.props.fallback === 'function') {
      return this.props.fallback(this.state.error, this.state.errorInfo);
    }

    return this.props.fallback;
  }
}

export default ErrorBoundary;
