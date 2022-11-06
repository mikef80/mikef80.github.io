import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItemActive = "bg-gray-400 flex-1 py-1";
  const menuItemInactive = "bg-gray-300 flex-1 py-1";
  const bg = "";

  return (
    <nav className="w-full flex flex-justify">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? menuItemActive : menuItemInactive
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? menuItemActive : menuItemInactive
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? menuItemActive : menuItemInactive
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
