import { useRef, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  let num = useRef(0);

  function handleClick() {
    setNumber((number) => number + 1);
    setNumber((number) => number + 2);

    num.current++;
    console.log("num", num.current);
  }
  return (
    <>
      <h1>
        Counter {number} {num.current}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Counter;
