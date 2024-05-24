/**
 * custom hook - useFormInput
 * value of your input element
 * handler(regular js function) that is responsible to update the value of the state
 */

import { useState } from "react";

export default function useFormInput() {
  const [inputValue, setInputValue] = useState("");
  function setInputHandler(event) {
    setInputValue(event.target.value);
  }

  return { inputValue, setInputHandler };
}

/**
 * {
 *  inputValue: inputValue
 *  setInputHandler: function setInputHandler(event) {
    setInputValue(event.target.value);
  }
 * }
 */
