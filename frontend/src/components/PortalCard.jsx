import { Link } from "react-router-dom";

export default function PortalCard({ portal, onBookmark }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{portal.name}</h5>
        <p className="card-text">{portal.description}</p>
        <span className="badge bg-primary mb-2">
          {portal.category}
        </span>

        <div className="d-flex justify-content-between mt-3">
          <Link
            to={`/portals/${portal._id}`}
            className="btn btn-outline-dark btn-sm"
          >
            Details
          </Link>

          <a
            href={portal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm"
          >
            Visit Website
          </a>

          {onBookmark && (
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onBookmark(portal._id)}
            >
              Bookmark
            </button>
          )}
        </div>
      </div>
    </div>
  );
}