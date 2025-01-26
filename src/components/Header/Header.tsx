import { Link } from "react-router-dom";

import { Container } from "@/shared/ui/Container";

export const Header = () => {
  return (
    <Container>
      <header className="py-4">
        <Link className="text-sky-400 hover:underline" to="/">
          Portfolio
        </Link>
      </header>
    </Container>
  );
};
