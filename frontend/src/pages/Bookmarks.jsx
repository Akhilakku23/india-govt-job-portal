import { useEffect, useState } from "react";
import axios from "axios";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookmarks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBookmarks(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  const removeBookmark = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/bookmarks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setBookmarks(bookmarks.filter((b) => b._id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>My Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p>No bookmarks yet</p>
      ) : (
        bookmarks.map((item) => (
          <div key={item._id} className="card p-3 mb-3 shadow-sm">
            <h5>{item.portal?.name}</h5>
            <p>{item.portal?.description}</p>

            <a
              href={item.portal?.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Visit
            </a>

            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => removeBookmark(item._id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}