import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h1">NotFound</Typography>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
    </Container>
  );
};
