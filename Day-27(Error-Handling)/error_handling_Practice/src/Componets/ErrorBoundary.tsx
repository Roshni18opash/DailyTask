import { Component, type ReactNode } from "react";
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }
      static getDerivedStateFromError(error:Error) {
        console.error("Error from error boundary:", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

    render(): ReactNode {
        if (this.state.hasError) {
            return (<h4>Something went wrong!</h4>);
        }
        return this.props.children
    }
}
export default ErrorBoundary;