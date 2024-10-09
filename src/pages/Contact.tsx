import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
