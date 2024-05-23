/**
 * JSX -> JS syntax extension
 * HTML + JS
 * Babel Transpiler uses plugins to achieve this
 * background-color X
 * backgroundColor
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Child from "./Child";

/**
 *
 * background-color:"red";
 * font-size:"14"
 */

function App() {
  const nameVariable = "vital skills";
  const list = ["a", "b"];
  const attributes = {
    nameVariable,
    list,
  };

  function setName(value) {
    console.log(value);
  }

  return (
    <>
      {/* <Child nameVariable={nameVariable} list={list}></Child> */}
      {/* <Child {...attributes}></Child> */}
      <Child setName={setName}></Child>
      <div style={{ backgroundColor: "red", fontSize: 20 }}>I am red</div>
    </>
  );
}

console.log(App());
export default App;

/**
 * [<li>a</li>, <li>b</li>, <li>c</li>]
 *
 *
 */
