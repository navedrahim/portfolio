import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to={`/login`}>Admin</Link>
    </div>
  );
};

export default Footer;
