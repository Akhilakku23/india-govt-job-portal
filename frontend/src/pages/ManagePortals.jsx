import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManagePortals() {
  const [portals, setPortals] = useState([]);
  const [form, setForm] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPortals();
  }, []);

  const fetchPortals = async () => {
    const res = await API.get("/portals");
    setPortals(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await API.put(`/portals/${editId}`, form);
    } else {
      await API.post("/portals", form);
    }

    setForm({});
    setEditId(null);
    fetchPortals();
  };

  const handleEdit = (portal) => {
    setForm(portal);
    setEditId(portal._id);
  };

  const handleDelete = async (id) => {
    await API.delete(`/portals/${id}`);
    fetchPortals();
  };

  return (
    <div className="container mt-4">
      <h2>Manage Portals</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={form.name || ""}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
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

        <input
          className="form-control mb-2"
          placeholder="Category"
          value={form.category || ""}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
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

        <button className="btn btn-success">
          {editId ? "Update Portal" : "Add Portal"}
        </button>
      </form>

      {portals.map((portal) => (
        <div key={portal._id} className="card mb-2 p-3">
          <h5>{portal.name}</h5>
          <p>{portal.category}</p>
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(portal)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(portal._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}