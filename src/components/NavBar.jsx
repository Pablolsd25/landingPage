import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-dark rounded-lg p-6">
      <Link to="/" className="btn btn-ghost text-xl">
        Yugipedia
      </Link>{" "}
    </div>
  );
}

export default NavBar;
