

import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      API.get(`/bookmarks/user/${user._id}`)
        .then((res) => setBookmarks(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/bookmarks/${id}`);
      setBookmarks(bookmarks.filter((b) => b._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">My Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <div className="alert alert-info">
          No bookmarks saved yet.
        </div>
      ) : (
        bookmarks.map((b) => (
          <div key={b._id} className="card shadow-sm mb-3 border-0 rounded-3">
            <div className="card-body">

              <h5 className="fw-semibold">{b.portal?.name}</h5>
              <p className="text-muted mb-3">
                {b.portal?.description}
              </p>

              <div className="d-flex gap-2">
                <a
                  href={b.portal?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-decoration-none"
                >
                  Visit Website
                </a>

                <button
                  onClick={() => handleDelete(b._id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}