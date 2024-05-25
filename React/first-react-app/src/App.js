/**
 * Hooks
 *  Rules
 *    Define the hook at the top level of your Functional component
 *    Functional components / Custom hooks
 *  Custom Hooks
 *   used to store the state as well as it contains the logic of updating your state
 *   name of hook must start with `use`
 */
import React, { useEffect, useState } from "react";
function App() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    //logic that may have side-effect
    console.log("callback runs");
    const timeoutId = setTimeout(() => {
      fetch("http://localhost:8080/")
        .then((response) => {
          setIsLoading(false);
          setError(false);
          console.log("success");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("error");
        });
    }, 2000);

    //clean up function
    return () => {
      console.log("cleanup runs");
      clearTimeout(timeoutId);
    };
  }, [input]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error in fetching data</div>
      ) : (
        <div>Success</div>
      )}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
    </>
  );
}

export default App;
