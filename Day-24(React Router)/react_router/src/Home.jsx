import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />

      <section className="hero">
        <h1>Welcome to React-Router Home-Page</h1>
        <p>Learn React Router, Components, and Modern UI step by step.</p>
        <button className="btn">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
