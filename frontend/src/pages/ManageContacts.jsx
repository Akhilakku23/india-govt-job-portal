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
          placeholder="Title"
          value={form.title || ""}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={form.description || ""}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Link"
          value={form.link || ""}
          onChange={(e) =>
            setForm({ ...form, link: e.target.value })
          }
        />

        <button className="btn btn-primary">
          Add Notification
        </button>
      </form>

      {notifications.map((note) => (
        <div key={note._id} className="card mb-2 p-3">
          <h5>{note.name}</h5>
          <p>{note.email}</p>
          <p>{note.message}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(note._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}