import Profile from "./Components/Profile";
import "./Components/style.css";

function App() {
  return (
    <div className="app-container">
      <Profile age={10} status="Single" />

      <Profile name="Roshni" age={21} status="Commited" />

      <Profile name="Neev" age={7} status="Coder" />

      <Profile name="Rose" age={27} status="Single">
        <span>Salary – 5 LPA</span>
      </Profile>
    </div>
  );
}

export default App;
