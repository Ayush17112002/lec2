import { useState } from "react";

export default function Lec14() {
  //   const [email, setEmail] = useState("");
  //   const [pwd, setPwd] = useState("");

  const [form, setForm] = useState({ email: "", pwd: "" });

  function submitHandler(event) {
    console.log("submit called");
    event.preventDefault();
    //email
    // if (!form.email.includes("@")) {
    //   alert("Error in email");
    //   return;
    // }

    const formData = new FormData(event.target);
    console.log(formData.get("email"));
    //API call to submit the form
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Enter your email: </label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      ></input>
      <br />
      <label htmlFor="password">Enter your password: </label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={(e) => {
          setForm({ ...form, pwd: e.target.value });
        }}
      ></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
