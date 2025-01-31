import React from 'react';
import { Typography, Box } from '@mui/material';
import projects from '../../data/cards.json';

const Page01: React.FC = () => {
  // プロジェクトデータの取得
  const project = projects.find(p => p.page === "01");

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>{project?.name}</Typography>
      <Typography variant="body1" paragraph>
        {project?.description}
      </Typography>
      
      {/* プロジェクトのiframe埋め込み */}
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

export default Page01;
