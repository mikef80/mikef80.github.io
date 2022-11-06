import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  /* let activeStyle = {
    color: 'red',
  }; */

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-500" : undefined)}
      >
        Home
      </NavLink>

      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
