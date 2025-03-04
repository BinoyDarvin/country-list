import { Link } from "react-router";

export const NotFound = () => {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/home">Go to Home</Link>
      </div>
    );
  };
  