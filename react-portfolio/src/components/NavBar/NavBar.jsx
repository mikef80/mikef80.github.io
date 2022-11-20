import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItemActive = "bg-gray-400 flex-1 py-1";
  const menuItemInactive = "bg-gray-300 flex-1 py-1";
  const bg = "";

  return (
    <nav className="w-full flex flex-justify relative top-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? menuItemActive : menuItemInactive
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? menuItemActive : menuItemInactive
        }
      >
        Projects
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
