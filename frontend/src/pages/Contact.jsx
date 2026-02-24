import {useState } from "react";
import API from "../services/api";
function Contact() {

  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    await API.post("/contacts", form);
        setForm({});
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>

      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control"
          value={form.title || ""}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
          value={form.email || ""}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4"
          value={form.message || ""}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          ></textarea>
        </div>

        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;