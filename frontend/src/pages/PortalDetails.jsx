import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function PortalDetails() {
  const { id } = useParams();
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    API.get(`/portals/${id}`).then(res => setPortal(res.data));
  }, [id]);

  if (!portal) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{portal.name}</h2>
      <p>{portal.description}</p>
      <span className="badge bg-info">{portal.category}</span>
      <br /><br />
      <a
        href={portal.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
      >
        Visit Official Website
      </a>
    </div>
  );
}