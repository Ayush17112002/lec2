/**
 * useRef - it lets you to refer a value
 *        - it returns a javascript object
 *        - you can directly mutate this object
 *        - it remains preserved even in re-renders unlike a local variable
 * {
 *  current:0
 * }
 *        - it can be used to refer a DOM node
 * document.getElementById(id) -> give you a reference to the DOM node
 * inputRef:{
 *  current: reference to DOM node corresponding to input tag
 * }
 */

import { forwardRef, useEffect, useRef, useState } from "react";

export default function Lec10() {
  // const refObject = useRef(0);
  // let myVariable = 10;
  // const [state, setState] = useState(0);
  // useEffect(() => {
  //   console.log(refObject);
  //   console.log(state);
  //   console.log(myVariable);
  // });
  const inputRef = useRef(null); //it is not referring to any DOM node
  function removeInput() {
    inputRef.current.remove();
  }
  return (
    <>
      {/* <button
        onClick={(e) => {
          console.log("clicked");
          refObject.current++;
          console.log(refObject);
          myVariable++;
          console.log(myVariable);
        }}
      >
        Click me
      </button>
      <br />
      <br />
      <button
        onClick={(e) => {
          //update your state
          setState(state + 1);
        }}
      >
        Re-render the component
      </button> */}
      <Input ref={inputRef} removeInput={removeInput} />
    </>
  );
}

const Input = forwardRef((props, inputRef) => {
  return (
    <>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" ref={inputRef}></input>
      <button
        onClick={() => {
          console.log(inputRef);
          inputRef.current.focus();
        }}
      >
        Check the ref
      </button>
      <br />
      <button onClick={props.removeInput}>Remove the inputbox</button>
    </>
  );
});
