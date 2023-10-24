import { Container, Typography } from '@mui/material';
import { ProjectList } from './components';

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1">Portfolio</Typography>
      <ProjectList />
    </Container>
  );
};
