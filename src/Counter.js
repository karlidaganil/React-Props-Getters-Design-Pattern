import React from "react";
import { CounterContext } from "./useCounterContext";

const Counter = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

const Count = () => {
  const count = React.useContext(CounterContext);
  return <h5>{count}</h5>;
};

const Label = ({ children }) => {
  return <h5>{children}</h5>;
};

const Increment = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

const Decrement = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
