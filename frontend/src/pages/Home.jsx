import { useEffect, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await API.get("/notifications");
      setNotifications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Latest Job Notifications</h2>

      {notifications.length === 0 && <p>No notifications available.</p>}

      {notifications.map((note) => (
        <div key={note._id} className="card mb-3 shadow-sm p-3">
          <h5>{note.title}</h5>
          <p>{note.description}</p>
          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </a>
        </div>
      ))}
    </div>
  );
}