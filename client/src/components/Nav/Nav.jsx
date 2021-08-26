import { NavLink } from "react-router-dom";
import "./Nav.css";

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
      <a className="link" href="/#projects">
        Projects
      </a>
      <a className="link" href="/#contact">
        Contact
      </a>
      <a
        className="link"
        href="https://docs.google.com/document/d/1JBHxjfH-5EYlZSR9srAEQbrn7rl4DJFHrCm5jBXW8GM/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
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
