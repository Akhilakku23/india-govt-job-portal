import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    API.get(`/bookmarks/user/${user._id}`)
      .then(res => setBookmarks(res.data));
  }, [user]);

  return (
    <div className="container mt-4">
      <h2>My Bookmarks</h2>
      {bookmarks.map(b => (
        <div key={b._id} className="card mb-2 p-3">
          <h5>{b.portalId.name}</h5>
          <a
            href={b.portalId.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
}