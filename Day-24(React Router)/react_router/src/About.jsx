import "./Page.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const GotoHome = () => {
    navigate("/contact");
  };
  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to React-Router About Page</h1>
        <p>Learn React Router, Components, and Modern UI step by step.</p>
        <button className="btn">Get Started</button>
        <button className="btn" onClick={() => GotoHome()}>
          Go To ContactPage
        </button>
        <button className="btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </section>
    </div>
  );
};

export default About;
