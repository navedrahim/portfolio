import { useState } from "react";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Login = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await login(form);
      setUser(user);
      history.push("/portal");
    } catch (error) {
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;
  return (
    <Layout user={props.user}>
    <div className="signin-form">
      <form onSubmit={onLogin}>
        <input
          id="signin-username-input"
          required
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          id="signin-password-input"
          required
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
    </Layout>
  );
};

export default Login;
