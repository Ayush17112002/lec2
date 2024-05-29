/**
 * useContext - lets you read & subscribe to the context from a component
 * prop drilling
 */

import { useContext, useState } from "react";
import ThemeContext from "./themeContext";

export default function Lec13() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const [state, setState] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme: state }}>
        <Form />
        <button
          onClick={(e) => {
            setState((state) => {
              return state === "light" ? "dark" : "light";
            });
          }}
        >
          Toggle theme
        </button>
      </ThemeContext.Provider>
    </>
  );
}
function Form() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <Input />
    </>
  );
}
function Input() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return <input type="text" />;
}
