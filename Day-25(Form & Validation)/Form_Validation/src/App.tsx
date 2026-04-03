import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useAuth } from "./ContextAuth/useAuth";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />
      {!isAuthenticated && <Login />}
    </>
  );
};

export default App;
