import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageContacts() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await API.get("/contacts");
    setContacts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/contacts", form);
    setForm({});
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await API.delete(`/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div className="container mt-4">
      <h2>Manage Contacts</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={form.name || ""}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Email"
          value={form.email || ""}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Message"
          value={form.message || ""}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button className="btn btn-primary">
          Add Contact
        </button>
      </form>

      {contacts.map((contact) => (
        <div key={contact._id} className="card mb-2 p-3">
          <h5>{contact.name}</h5>
          <p>{contact.email}</p>
          <p>{contact.message}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(contact._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}