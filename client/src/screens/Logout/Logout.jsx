import { useEffect } from "react"
import { logout } from "../../services/user";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  const { setUser } = props;
  const history = useHistory();

  useEffect(() => {
    const handleLogout = () => {
      logout();
      setUser(null);
      history.push("/");
    };
    handleLogout();
  }, [history, setUser]);
  return "";
}

export default Logout;