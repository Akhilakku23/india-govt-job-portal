import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/admin/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/user/${id}`);
    fetchUsers();
  };

  const removeBookmark = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/bookmark/${id}`);
    fetchUsers();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <div key={user._id} className="card shadow p-3 mb-4">
          <div className="d-flex justify-content-between">
            <div>
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <span className="badge bg-primary">
                Bookmarks: {user.bookmarkCount}
              </span>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => deleteUser(user._id)}
            >
              Delete User
            </button>
          </div>

          <hr />

          <h6>Bookmarked Portals:</h6>

          {user.bookmarks.length === 0 ? (
            <p>No bookmarks</p>
          ) : (
            <ul className="list-group">
              {user.bookmarks.map((bm) => (
                <li
                  key={bm._id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {bm.portal?.name}

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeBookmark(bm._id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}