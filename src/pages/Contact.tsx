import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Chip, Box } from '@mui/material';
import projects from '../data/cards.json'; // cards.jsonからデータをインポート

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem', // ヘッダーと重ならないようにトップに余白を追加
        paddingLeft: '1rem', // 両端に少しだけ隙間を追加
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
                transition: 'transform 0.3s ease-in-out',  // アニメーションを追加
                '&:hover': {
                  transform: 'scale(1.05)',  // カードを浮かせる
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',  // ホバー時の影
                },
              }}
            >
              <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer" sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="140"
                  image={project.imageUrl}
                  title={project.name}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Contact;
