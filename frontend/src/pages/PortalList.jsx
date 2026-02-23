import { useEffect, useState } from "react";
import axios from "axios";
import PortalCard from "../components/PortalCard";

export default function PortalList() {
  const [portals, setPortals] = useState([]);
  const [filteredPortals, setFilteredPortals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/portals")
      .then((res) => {
        setPortals(res.data);
        setFilteredPortals(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load portals");
        setLoading(false);
      });
  }, []);

  // 🔍 Search Filter
  useEffect(() => {
    const filtered = portals.filter((portal) =>
      portal.name.toLowerCase().includes(search.toLowerCase()) ||
      portal.category?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPortals(filtered);
  }, [search, portals]);

  // ⭐ Bookmark Function
  const handleBookmark = async (portalId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/bookmarks",
        { portalId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Bookmarked Successfully!");
    } catch (error) {
      alert("Bookmark failed");
    }
  };

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
  if (error) return <h3 className="text-center mt-5">{error}</h3>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Government Job Portals</h2>

      {/* 🔍 Search Bar */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search by portal name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredPortals.length > 0 ? (
          filteredPortals.map((portal) => (
            <div className="col-md-4 mb-3" key={portal._id}>
              <PortalCard
                portal={portal}
                onBookmark={handleBookmark}
              />
            </div>
          ))
        ) : (
          <h5 className="text-center">No portals found</h5>
        )}
      </div>
    </div>
  );
}