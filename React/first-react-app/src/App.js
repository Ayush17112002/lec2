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
import List from "./List";
import Card from "./Card";
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
      <div>I am div</div>
      <Card>I am card1</Card>
      <Card>I am card2</Card>
      <Card>I am card3</Card>
      <Card>I am card4</Card>
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
