// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function Home() {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const res = await API.get("/notifications");
//       setNotifications(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div className="container mt-4">Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Latest Job Notifications</h2>

//       {notifications.length === 0 && <p>No notifications available.</p>}

//       {notifications.map((note) => (
//         <div key={note._id} className="card mb-3 shadow-sm p-3">
//           <h5>{note.title}</h5>
//           <p>{note.description}</p>
//           <a
//             href={note.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-outline-primary btn-sm"
//           >
//             View Details
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 🔵 HERO SECTION */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
          }}
        ></div>

        <div className="container position-relative">
          <h1 className="display-4 fw-bold">
            🇮🇳 India Government Job Portal
          </h1>
          <p className="lead mt-3">
            Find Latest Government Jobs from UPSC, SSC, Railway, Banking &
            Defence
          </p>

          

          {/* 🔘 BUTTONS */}
          <div className="mt-4">
            <Link to="/portals" className="btn btn-danger btn-lg me-3">
              Explore Portals
            </Link>

            <Link to="/register" className="btn btn-outline-light btn-lg">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* 🔵 FEATURES SECTION */}
      <div className="container mt-5">
        <div className="row text-center">
          <h2 className="mb-4">Why Choose Our Portal?</h2>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>🔍 Easy Search</h5>
              <p>Search government job portals quickly and easily.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>⭐ Bookmark</h5>
              <p>Save your favorite job portals for quick access.

              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>🔔 Notifications</h5>
              <p>Get latest job updates and announcements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 CALL TO ACTION */}
      <div className="bg-dark text-white text-center py-5 mt-5">
        <h3>Start Your Government Career Today!</h3>
        <Link to="/register" className="btn btn-warning mt-3">
          Create Free Account
        </Link>
      </div>
    </>
  );
}