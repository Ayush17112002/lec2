export default function Input(props) {
  return (
    <>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" onChange={props.setName}></input>
    </>
  );
}
