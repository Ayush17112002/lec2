import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/profile">Profile</Link>
      </button>
      <button>
        <Link to="/feed">Feed</Link>
      </button>
    </div>
  );
}
