
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponents from "./ErrorComponents";

const App:React.FC = () => {
const [count,setCount]=useState<number>(0);
return(
  <div style={{padding:"20px",fontFamily:"Arial, sans-serif"}}>
    <h1>Error Boundary</h1>
    {/* Wrap components in ErrorBoundary ,pass count props*/}
    <ErrorBoundary>
      <ErrorComponents count={count}/>
      </ErrorBoundary>
      <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        marginTop: "20px",
      }}
      onClick={() => setCount(count + 1)}
    >
      Increment Count
    </button>
  </div>
);

};

export default App