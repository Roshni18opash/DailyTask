import { useState } from "react";

type CounterProps = {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
};

const Counter = ({
  initialValue = 0,
  step = 1,
  min = 0,
  max = 100,
}: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    if (count + step <= max) {
      setCount(count + step);
    }
  };

  const decrement = () => {
    if (count - step >= min) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="counter-card">
      <h2>Count: {count}</h2>
      <p>
        Min: {min} | Max: {max} | Step: {step}
      </p>

      <button onClick={increment} disabled={count >= max}>
        +
      </button>

      <button onClick={decrement} disabled={count <= min}>
        -
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
