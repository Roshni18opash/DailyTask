import { useNavigate } from "react-router-dom";

type Props = {
  onLogin: () => void;
};

const Login = ({ onLogin }: Props) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin();
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input type="text" placeholder="Email" />
      <br />
      <br />

      <input type="password" placeholder="Password" />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
