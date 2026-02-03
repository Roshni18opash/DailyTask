import Header from "./Header";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Home from "./Home";

const App = () => {
  //this state is shared bet'n Header & Home.
  const [search, setSearch] = useState<string>("");
  return (
    <>
      {/* passing function to Header */}
      <Header setSearch={setSearch} />
      {/* current search value to home 
      this called lifting state up*/}
      <Home search={search} />
    </>
  );
};

export default App;
