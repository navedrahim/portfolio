import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/portal">
        Portal
      </NavLink>
      <NavLink className="link" to="/logout">
        Logout
      </NavLink>
    </>
  );

  const alwaysOptions = (
    <>
      <a className="link" href="/#about-me">
        About Me
      </a>
      <a className="link" href="/#contact">
        Contact
      </a>
      <a className="link" href="/#projects">
        Projects
      </a>
    </>
  );

  return (
    <nav className="nav">
      <div className="links">
        {alwaysOptions}
        {user ? authenticatedOptions : null}
      </div>
    </nav>
  );
};

export default Nav;
