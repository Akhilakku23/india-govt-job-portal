// import { useEffect, useState, useContext } from "react";
// import API from "../services/api";
// import PortalCard from "../components/PortalCard";
// import { AuthContext } from "../context/AuthContext";

// export default function PortalList() {
//   const [portals, setPortals] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetchPortals();
//   }, []);

//   const fetchPortals = async () => {
//     const res = await API.get("/portals");
//     setPortals(res.data);
//   };

//   const handleBookmark = async (portalId) => {
//     await API.post("/bookmarks", { portalId });
//     alert("Bookmarked!");
//   };

//   const filtered = portals.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) &&
//       (category ? p.category === category : true)
//   );

//   return (
//     <div className="container mt-4">
//       <h2>Job Portals</h2>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <input
//             type="text"
//             placeholder="Search portal..."
//             className="form-control"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <div className="col-md-4">
//           <select
//             className="form-select"
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             <option>PSC</option>
//             <option>UPSC</option>
//             <option>SSC</option>
//             <option>Railway</option>
//             <option>Banking</option>
//             <option>Defence</option>
//           </select>
//         </div>
//       </div>

//       <div className="row">
//         {filtered.map((portal) => (
//           <div className="col-md-4 mb-3" key={portal._id}>
//             <PortalCard
//               portal={portal}
//               onBookmark={user ? handleBookmark : null}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";
import PortalCard from "../components/PortalCard";
import { AuthContext } from "../context/AuthContext";

export default function PortalList() {
  const [portals, setPortals] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Fetch portals
  useEffect(() => {
    API.get("/portals")
      .then((res) => setPortals(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Read category from URL query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) {
      setCategory(cat);
    } else {
      setCategory("");
    }
  }, [location]);

  const filtered = portals.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Browse Government Job Portals</h2>
        <p className="text-muted">
          Discover official recruitment portals across India.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="row mb-4">
        <div className="col-md-8 mb-2">
          <input
            type="text"
            placeholder="Search portal..."
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option>PSC</option>
            <option>UPSC</option>
            <option>SSC</option>
            <option>Railway</option>
            <option>Banking</option>
            <option>Defence</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {filtered.length === 0 ? (
          <div className="alert alert-info text-center">
            No portals found.
          </div>
        ) : (
          filtered.map((portal) => (
            <div className="col-lg-4 col-md-6 mb-4" key={portal._id}>
              <PortalCard portal={portal} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}