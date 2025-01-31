import React from 'react';
import { Typography, Box } from '@mui/material';
import projects from '../../data/cards.json';

const Page02: React.FC = () => {
  const project = projects.find(p => p.page === "02");

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>{project?.name}</Typography>
      <Typography variant="body1" paragraph>
        {project?.description}
      </Typography>
      
      <Box sx={{ width: '100%', height: '600px', overflow: 'hidden' }}>
        <iframe
          src={project?.link}
          title={project?.name}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Page02;
