import { Component,type ErrorInfo,type ReactNode } from 'react'

interface ErrorProps{
    children:ReactNode;
}
interface ErrorState{
    hasError:boolean;
}

class ErrorBoundary extends Component<ErrorProps,ErrorState>{
constructor(props:ErrorProps){
    super(props);
    this.state={hasError:false};
} 
static getDerivedStateFromError():ErrorState{
    return {hasError:true};
}
componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error Caught:",error);
    console.error("Error Info:",errorInfo);
}
    render(): ReactNode {
        if(this.state.hasError){
            return ( <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4f6f8",
      fontFamily: "Segoe UI, Tahoma, Arial, sans-serif",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "48px 40px",
        maxWidth: "480px",
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: 600,
          color: "#d62721",
        }}
      >
        Something went wrong !
      </h1>

      <p
        style={{
          margin: "16px 0 32px",
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#6c757d",
        }}
      >
       The number can be increased step by step up to 10.
      </p>

      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 24px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#ffffff",
          backgroundColor: "#0d6efd",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reload Page
      </button>
    </div>
  </div>);
        }
        return this.props.children;
    }
}
export default ErrorBoundary;