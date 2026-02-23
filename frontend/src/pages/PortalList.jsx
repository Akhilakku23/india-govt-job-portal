// import { useEffect, useState } from "react";
// import axios from "axios";
// import PortalCard from "../components/PortalCard";

// export default function PortalList() {
//   const [portals, setPortals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/portals")
//       .then((res) => {
//         console.log("API Response:", res.data); // check console
//         setPortals(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load portals");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
//   if (error) return <h3 className="text-center mt-5">{error}</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Government Job Portals</h2>

//       <div className="row">
//         {portals.length > 0 ? (
//           portals.map((portal) => (
//             <div className="col-md-4 mb-3" key={portal._id}>
//               <PortalCard portal={portal} />
//             </div>
//           ))
//         ) : (
//           <h5>No portals found</h5>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import PortalCard from "../components/PortalCard";

export default function PortalList() {
  const [portals, setPortals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/portals")
      .then((res) => {
        setPortals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load portals");
        setLoading(false);
      });
  }, []);

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
    console.error(error);
    alert("Bookmark failed");
  }
};

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
  if (error) return <h3 className="text-center mt-5">{error}</h3>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Government Job Portals</h2>

      <div className="row">
        {portals.length > 0 ? (
          portals.map((portal) => (
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