/**
 * useCallback -> It lets you cache the function definition
 */

import { memo, useCallback, useState } from "react";

export default function Lec12() {
  const [state, setState] = useState("");
  const myFunction = useCallback(function expensiveFunction() {
    for (let i = 0; i < 1e9; i++) {}
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          setState((state) => state + 1);
        }}
      >
        Click me
      </button>
      <Child fn={myFunction} />
    </>
  );
}

const Child = memo(() => {
  console.log("child rendered");
  return <>Child</>;
});
