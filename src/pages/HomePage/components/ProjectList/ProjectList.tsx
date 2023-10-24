import { Box, Stack, Typography } from '@mui/material';
import { useProjectList } from './hooks';

export const ProjectList = () => {
  const projects = useProjectList();

  return (
    <Stack component="ul" gap={1}>
      {projects.map((it, i) => (
        <Box key={i} component="li">
          <Typography>{it}</Typography>
        </Box>
      ))}
    </Stack>
  );
};
