/**
 * JSX -> JS syntax extension
 * HTML + JS
 * Babel Transpiler uses plugins to achieve this
 * background-color X
 * backgroundColor
 */
import React from "react";
const name = "Jon Snow";
const list = ["a", "b", "c"];
function App() {
  return (
    <>
      <h1>Heading</h1>
      <label for="name">Enter your name</label>
      <input id="name"></input>
      <h4>{name}</h4>
      <ul className="list-items">
        {/* {list.map((item) => {
          return <li>{item}</li>;
        })} */}
        {/* {[<li>a</li>, <li>b</li>, <li>c</li>]} */}
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
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
