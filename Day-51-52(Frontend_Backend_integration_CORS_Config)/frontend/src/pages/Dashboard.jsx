import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchContacts = async () => {
      try {
        const res = await API.get("/contacts");
        setContacts(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
        console.log(err);
      }
    };

    fetchContacts();
  }, [navigate]);

  const addContact = async (e) => {
    e.preventDefault();
    await API.post("/contacts", newContact);

    const res = await API.get("/contacts");
    setContacts(res.data);

    setNewContact({ name: "", email: "", phone: "" });
  };

  const deleteContact = async (id) => {
    await API.delete(`/contacts/${id}`);

    const res = await API.get("/contacts");
    setContacts(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h2>Contact Detail</h2>

      <div className="dashboard-card">
        <h3>Add Contact</h3>

        <form onSubmit={addContact}>
          <input
            placeholder="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
            required
          />
          <input
            placeholder="Email"
            value={newContact.email}
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
          />
          <input
            placeholder="Phone"
            value={newContact.phone}
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
          />
          <button type="submit">Add</button>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </form>

        <h3 style={{ marginTop: "20px" }}>Your Contacts</h3>

        {contacts.map((c) => (
          <div key={c._id} className="contact-card">
            <strong>{c.name}</strong>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            <button onClick={() => deleteContact(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
