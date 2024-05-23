/**
 * props:{
 *  name:"abc"
 *  list:["a","b"]
 * }
 * Destructuring objects: extracting out its properties
 */

export default function Child({ setName }) {
  function handler(event) {
    setName(event.target.value);
  }
  return (
    <>
      {/* <div>{nameVariable}</div>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> */}
      <label htmlFor="marks">Enter your marks</label>
      <input id="marks" type="number" onChange={handler}></input>
    </>
  );
}
