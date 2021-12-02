import "./App.css";
import Counter from "./Counter";
import { useCounter } from "./useCounter";
import { CounterContext } from "./useCounterContext";

const App = () => {
  const { count, getIncrementProps, getDecrementProps } = useCounter({
    initialCount: 5,
    min: 0,
    max: 10,
  });

  return (
    <div className="center">
      <CounterContext.Provider value={count}>
        <Counter>
          <Counter.Increment text="+" {...getIncrementProps({})} />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count />
          <Counter.Decrement text="-" {...getDecrementProps({})} />
        </Counter>
      </CounterContext.Provider>
    </div>
  );
};

export default App;
