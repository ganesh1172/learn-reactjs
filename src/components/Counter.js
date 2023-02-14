import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber((number) => number + 1);
    setNumber((number) => number + 2);
    setNumber((number) => number + 3);
    setNumber((number) => number + 4);
    console.log("num", number);
  }
  return (
    <>
      <h1>Counter {number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Counter;
