/**
 * JSX -> JS syntax extension
 * HTML + JS
 * Babel Transpiler uses plugins to achieve this
 * background-color X
 * backgroundColor
 */
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Child from "./Child";
import List from "./List";
import Card from "./Card";
import Input from "./Input";

function App() {
  const [counter, setCounter] = useState(0);
  // function setNameHandler(event) {
  //   // name = event.target.value;
  //   setName(event.target.value); //setName(newValue)
  //   console.log(name);
  // }
  function clickHandler(event) {
    // setCounter(counter + 1); //1
    // setCounter(counter + 1); //1
    /**counter+2 */

    //UPDATER FUNCTION
    setCounter((prevCounter) => {
      //you must return a new value for the state counter
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      //you must return a new value for the state counter
      return prevCounter + 1;
    });
    //2
  }
  return (
    <>
      {/* <Input setName={setNameHandler} /> *<Input></Input> */}
      <button onClick={clickHandler}>Click me</button>
      <div>Your counter is: {counter}</div>
    </>
  );
}
export default App;
