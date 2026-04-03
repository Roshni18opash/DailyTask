import Counter from "./Components/Counter";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Counter/>

      <Counter
        initialValue={10}
        step={2}
        min={0}
        max={20}
      />

      <Counter
        initialValue={50}
        step={5}
        min={30}
        max={100}
      />
    </div>
  );
}

export default App;
