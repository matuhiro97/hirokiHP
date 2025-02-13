import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh', // ビューポート全体の高さ
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00897b', // ページ全体の背景色
        color: '#fff', // テキストの色を白に設定
      }}
    >
      <h2>霧島</h2>
      <nav>
        <Box
          sx={{
            display: 'flex',
            gap: 2, // ボタン間のスペースを指定
            mt: 2, // 上部に少し余白を追加
          }}
        >
          <Button
            variant="outlined"
            href="https://x.com/N687gp15kALZc51"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                borderColor: '#b2fab4',
                backgroundColor: '#004d40', // ホバー時の背景色
              },
            }}
          >
            X 
          </Button>
          <Button
            variant="outlined"
            href="https://www.instagram.com/msuhro.6?igsh=MmZoNW9xdTRrbW1n&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                borderColor: '#b2fab4',
                backgroundColor: '#004d40',
              },
            }}
          >
            Instagram
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/matuhiro97"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                borderColor: '#b2fab4',
                backgroundColor: '#004d40',
              },
            }}
          >
            GitHub
          </Button>
        </Box>
      </nav>
    </Box>
  );
};

export default Home;
