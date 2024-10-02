import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" color="error">
        404 - Page Not Found
      </Typography>
      <Typography>The page you are looking for does not exist.</Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
