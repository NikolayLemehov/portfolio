import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>
        Take me back to the <Link to="/">Home</Link>
      </p>
    </div>
  );
};
