import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex flex-grow flex-col justify-center">
      <h1 className="my-4 text-center text-4xl">404</h1>
      <p className="text-center">
        Take me back to the{" "}
        <Link className="text-sky-400 hover:underline" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};
