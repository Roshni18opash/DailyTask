import Widget from "./Componets/Widget";
import Employee from "./Componets/Employee";
import logo from "./assets/nature.jpg";
import ErrorBoundary from "./Componets/ErrorBoundary";
const App = () => {
  return (
    <>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <Employee />
      </ErrorBoundary>
      <ErrorBoundary>
        {/* when this props pass empty string there is error only in this components */}
        <Widget profileimage={logo} />
      </ErrorBoundary>
    </>
  );
};

export default App;
