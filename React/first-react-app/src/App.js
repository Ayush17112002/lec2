/**
 * Hooks
 *  Rules
 *    Define the hook at the top level of your Functional component
 *    Functional components / Custom hooks
 *  Custom Hooks
 *   used to store the state as well as it contains the logic of updating your state
 *   name of hook must start with `use`
 */
import React, { useState } from "react";
import useFormInput from "./useFormInput";
function App() {
  const { inputValue: firstName, setInputHandler: setFirstName } =
    useFormInput();
  const { inputValue: lastName, setInputHandler: setLastName } = useFormInput();
  return (
    <>
      <label htmlFor="firstName">Enter your first name: </label>
      <input id="firstName" type="text" onChange={setFirstName} />
      <br />
      <label htmlFor="lastName">Enter your first name: </label>
      <input id="lastName" type="text" onChange={setLastName} />
      <br />
      <div>
        Your Name is: {firstName}
        {lastName}
      </div>
    </>
  );
}

export default App;
