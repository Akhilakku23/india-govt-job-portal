import React, { useEffect, useState } from "react";
import axios from "axios";

function LatestNotifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notifications");
      setNotifications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
       Latest Notifications
      </h2>

      <div className="row">

        {notifications.length === 0 ? (
          <p className="text-center">No notifications available</p>
        ) : (
          notifications.map((item) => (
            <div className="col-md-6 mb-4" key={item._id}>

              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h5 className="card-title text-primary">
                    {item.title}
                  </h5>

                  <p className="card-text">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    View Details
                  </a>

                </div>

                <div className="card-footer text-muted small">
                  {new Date(item.createdAt).toLocaleDateString()}
                  {new Date(item.createdAt).toLocaleTimeString()}
                  {new Date(item.updatedAt).toLocaleDateString()}
                
                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default LatestNotifications;