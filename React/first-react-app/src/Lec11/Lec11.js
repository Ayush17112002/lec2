/**
 * useMemo -> lets you cache the results of a heavy computation
 *         -> prevents re rendering of child components when its props do not change
 */

import { memo, useEffect, useMemo, useState } from "react";

function calculate() {
  for (let i = 0; i < 1e9; i++) {}
  console.log("in calculate");
  return "Hey";
}

export default function Lec11() {
  const [state, setState] = useState(0);
  const [input, setInput] = useState("");

  console.time("time");
  const result = useMemo(() => {
    return calculate();
  }, [state]);
  console.timeEnd("time");

  return (
    <>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click me
      </button>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <Child1 value={state} />
    </>
  );
}

const Child1 = memo(() => {
  console.log("child1 rendered");
  return (
    <>
      <p>Child1</p>
      <Child2 />
    </>
  );
});

function Child2() {
  console.log("child2 rendered");
  return <>Child2</>;
}
