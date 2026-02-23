import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPortals() {
  const [portals, setPortals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/portals")
      .then(res => setPortals(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Admin - Manage Portals</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {portals.map(portal => (
            <tr key={portal._id}>
              <td>{portal.name}</td>
              <td>{portal.category}</td>
              <td>{portal.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}