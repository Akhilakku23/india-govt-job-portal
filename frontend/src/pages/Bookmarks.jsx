import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    if (!user) return; // 🔥 important

    axios
      .get(`http://localhost:5000/api/bookmarks/${user._id}`)
      .then((res) => setBookmarks(res.data))
      .catch((err) => console.log(err));

  }, [user]);

  // 🔐 If not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-4">
      <h2>My Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p>No bookmarks found</p>
      ) : (
        bookmarks.map((item) => (
          <div key={item._id} className="card p-3 mb-2">
            <h5>{item.portal?.name}</h5>
          </div>
        ))
      )}
    </div>
  );
}