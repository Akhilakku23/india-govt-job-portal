export default function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">About CareerBridge</h2>
        <p className="text-muted">
          A modern platform helping job seekers discover verified public sector opportunities.
        </p>
      </div>

      <div className="card shadow-sm border-0 p-4">
        <p>
          CareerBridge is a private career discovery platform designed to
          simplify the way job seekers explore government and public sector
          opportunities.
        </p>

        <p>
          Our mission is to provide a centralized, easy-to-use platform where
          users can search, filter, and bookmark trusted recruitment portals
          efficiently.
        </p>

        <p>
          We are not affiliated with any government authority. We aggregate
          publicly available information to help users save time and stay
          informed.
        </p>
      </div>
    </div>
  );
}