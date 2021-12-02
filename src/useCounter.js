import { useState } from "react";

const useCounter = ({ initialCount, max, min }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const getIncrementProps = ({ ...otherProps }) => {
    return {
      onClick: handleIncrement,
      disabled: count === max,
      ...otherProps,
    };
  };

  const getDecrementProps = ({ ...otherProps }) => {
    return { onClick: handleDecrement, disabled: count === min, ...otherProps };
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    getIncrementProps,
    getDecrementProps,
  };
};

export { useCounter };
