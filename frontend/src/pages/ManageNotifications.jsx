import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res = await API.get("/notifications");
    setNotifications(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/notifications", form);
    setForm({});
    fetchNotifications();
  };

  const handleDelete = async (id) => {
    await API.delete(`/notifications/${id}`);
    fetchNotifications();
  };

  return (
    <div className="container mt-4">
      <h2>Manage Notifications</h2>

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
          <h5>{note.title}</h5>
          <p>{note.description}</p>
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