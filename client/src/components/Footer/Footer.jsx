import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-link" to={`/login`}>...</Link>
    </div>
  );
};

export default Footer;
