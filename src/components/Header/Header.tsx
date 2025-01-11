import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container mx-auto py-4">
      <Link className="text-sky-400 hover:underline" to="/">
        Portfolio
      </Link>
    </header>
  );
};
