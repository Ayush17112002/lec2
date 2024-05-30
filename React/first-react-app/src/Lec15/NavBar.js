import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/profile">Go to profile</Link>
      </li>
      <li>
        <Link to="/home">Go to home</Link>
      </li>
    </ul>
  );
}
