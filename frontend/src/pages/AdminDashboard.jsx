import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h4>Manage Portals</h4>
            <Link to="/admin/portals" className="btn btn-primary mt-3">
              Go to Portals
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h4>Manage Notifications</h4>
            <Link to="/admin/notifications" className="btn btn-warning mt-3">
              Go to Notifications
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h4>Manage Users</h4>
            <Link to="/admin/dashboard" className="btn btn-info mt-3">
              Go to Users and Bookmarks
            </Link>
          </div>
        </div>


        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h4>Manage Users</h4>
            <Link to="/admin/contacts" className="btn btn-info mt-3">
              Go to Users and Contacts
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}