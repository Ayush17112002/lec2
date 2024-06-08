import { useState } from "react";
import styles from "./A.module.css";
import B from "./B";
import styled from "styled-components";

/**
 * divElement = <div style={{color:red}}></div>
 */

const DivElement = styled.div`
  color: ${(props) => {
    console.log(props);
    return props.error ? "red" : "green";
  }};
  &:hover {
    color: blue;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: #bf4f74;
  margin: 0 1rem;
  padding: 0.25em 1em;
`;

export default function A() {
  const [isError, setIsError] = useState(true);
  /**
   * isError -> true => error exists => show color of text in red
   * isError -> false => error do no exists -> show color in greenm;
   */
  return (
    <div>
      <p className={styles.para}>A's content</p>
      {/**<p class="para_1"> */}
      <DivElement error={isError}>
        I am custom div made by styled-components.
        <p>Hey I am p</p>
      </DivElement>
      <Button
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle the State
      </Button>
      <div>{`Error is ${isError}`}</div>
      <B />
    </div>
  );
}
