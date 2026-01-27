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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam
          magnam ipsum dolorem ea natus nulla harum nostrum officia repellat
          voluptatibus. Similique pariatur maxime fuga inventore, architecto
          exercitationem unde reiciendis?
        </p>
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
