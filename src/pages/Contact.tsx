import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    name: '面白いゲーム',
    description: 'React で作った面白いゲームです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/funny-game',
  },
  {
    name: 'ポートフォリオサイト',
    description: '自分の作品を紹介するためのポートフォリオサイトです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/portfolio',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  {
    name: 'チャットアプリ',
    description: 'リアルタイムでチャットができるアプリです',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/chat-app',
  },
  
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem', // ヘッダーと重ならないようにトップに余白を追加
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
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
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