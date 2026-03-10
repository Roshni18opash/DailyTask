import { useNavigate } from "react-router-dom";
import "./Page.css";

const Contact = () => {
  const navigate = useNavigate();
  const GotoHome = () => {
    navigate("/");
  };
  return (
    <div className="page">
      <div className="page-content">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
          <button type="button" onClick={GotoHome}>
            Go To Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
