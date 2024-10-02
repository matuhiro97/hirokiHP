import React from 'react';
import { Grid, Typography } from '@mui/material';

const MainContent: React.FC = () => {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Home</Typography>
          <Typography>Welcome to my homepage. This is a simple website built with React and TypeScript.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">About</Typography>
          <Typography>This section talks about 松本浩輝 and his journey with React components and TypeScript.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Contact</Typography>
          <Typography>You can contact us at: example@example.com</Typography>
        </Grid>
      </Grid>
    </main>
  );
};

export default MainContent;
