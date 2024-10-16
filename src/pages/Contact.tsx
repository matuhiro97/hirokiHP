import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Chip, Box } from '@mui/material';

const projects = [
  {
    name: '面白いゲーム',
    description: 'React で作った面白いゲームです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/funny-game',
    tags: ['JavaScript', 'React'],
    date: '2021/12/14',
  },
  {
    name: 'ポートフォリオサイト',
    description: '自分の作品を紹介するためのポートフォリオサイトです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/portfolio',
    tags: ['HTML', 'CSS', 'JavaScript'],
    date: '2022/01/10',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
    tags: ['Node.js', 'Socket.IO'],
    date: '2022/02/20',
  },
  
];

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
      <Typography variant="h4" component="h2" gutterBottom>
        作成物
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer" style={{ flexGrow: 1 }}>
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
                      <Chip key={tagIndex} label={tag} size="small" style={{ marginRight: '0.5rem' }} />
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
