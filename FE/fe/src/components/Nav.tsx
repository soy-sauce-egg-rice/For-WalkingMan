import { Link } from "react-router-dom";
import "./Nav.css"
export default function Nav() {
  return (
    <>
      <nav>
        <div className="navList">
          <div className="link">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link to="/about">About</Link>
          </div>
          <div className="link">
            <Link to="/search">Search</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
