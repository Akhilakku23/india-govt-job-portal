// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";




// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext);


//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <Link className="navbar-brand" to="/">
//         India Govt Job Portal
//       </Link>

//       <div className="ms-auto">
//         <Link
//           className="btn btn-outline-light me-2"
//           to="/portals"
//         >
//           Portals
//         </Link>

//         {user && (
//           <Link className="btn btn-outline-light me-2" to="/bookmarks">
//             Bookmarks
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link className="btn btn-warning me-2" to="/admin">
//             Admin
//           </Link>
//         )}

//         {user ? (
//           <button className="btn btn-danger" onClick={logout}>
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link className="btn btn-success me-2" to="/login">
//               Login
//             </Link>
//             <Link className="btn btn-primary" to="/register">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg modern-navbar px-4 py-3 shadow-sm">
      <Link className="navbar-brand brand-text" to="/">
        NextHire
      </Link>

      <div className="ms-auto d-flex align-items-center">
        <Link className="nav-link-custom" to="/portals">
          Browse Jobs
        </Link>

        {user && (
          <Link className="nav-link-custom" to="/bookmarks">
            Saved Jobs
          </Link>
        )}

        {user?.role === "admin" && (
          <Link className="btn btn-warning fw-semibold me-3 px-3 rounded-pill">
            Admin
          </Link>
        )}

        {user ? (
          <button
            className="btn btn-outline-light rounded-pill px-3"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              className="btn btn-light rounded-pill px-3 me-2 fw-semibold"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn btn-primary rounded-pill px-3 fw-semibold"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}