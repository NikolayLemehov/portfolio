import { Link, LinkProps } from 'react-router-dom';

export const ExtLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};
