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
function App() {
  return (
    <>
      <div>This is div.</div>
      <Header>This is header.</Header>
      <Content></Content>
      <Footer></Footer>
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
