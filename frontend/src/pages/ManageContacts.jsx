import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AdminUserDetails() {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/admin/users/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const removeBookmark = async (bookmarkId) => {
    await axios.delete(`http://localhost:5000/api/admin/bookmark/${bookmarkId}`);
    fetchUser();
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-4">

      <h2>User Details</h2>

      <div className="card shadow p-4">

        <h4>{user.name}</h4>

        <p><strong>User ID:</strong> {user._id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>

        <p>
          <strong>Created:</strong>{" "}
          {new Date(user.createdAt).toLocaleString()}
        </p>

        <p>
          <strong>Updated:</strong>{" "}
          {new Date(user.updatedAt).toLocaleString()}
        </p>

        <span className="badge bg-primary">
          Total Bookmarks: {user.bookmarkCount}
        </span>

      </div>

      <div className="card shadow p-4 mt-4">

        <h5>Bookmarked Portals</h5>

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
                  className="btn btn-sm btn-danger"
                  onClick={() => removeBookmark(bm._id)}
                >
                  Remove
                </button>
              </li>
            ))}

          </ul>
        )}

      </div>

    </div>
  );
}