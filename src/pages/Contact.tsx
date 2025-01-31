import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Chip, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // ルーティング用
import projects from '../data/cards.json'; // JSONデータのインポート

const Contact: React.FC = () => {
  const navigate = useNavigate(); // ページ遷移用のフック

  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <Grid container spacing={4} alignItems="stretch">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer" sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  alt={project.name}
                  image={project.imageUrl}
                  title={project.name}
                  sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.description}
                  </Typography>
                  <Box mb={1}>
                    {project.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} size="small" sx={{ marginRight: '0.5rem' }} />
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    投稿日: {project.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* 詳細ページへのボタン */}
              <Box textAlign="center" pb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/CardPages/${project.page}`)}
                >
                  詳細を見る
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Contact;
