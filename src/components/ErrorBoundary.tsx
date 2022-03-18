import React from "react";

interface Props {
  children: React.ReactNode;
  fallbackRender: (props: { error: Error | null }) => React.ReactElement;
}

export class ErrorBoundary extends React.Component<
  Props,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { children, fallbackRender } = this.props;
    const { error } = this.state;

    if (error) {
      return fallbackRender({ error });
    }

    return children;
  }
}

export default ErrorBoundary;
