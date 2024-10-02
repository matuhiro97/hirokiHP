import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#66bb6a', // 薄めの緑色
        padding: '0.5rem', // AppBar全体のパディング
      }}
    >
      <Toolbar>
       
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            margin: '0 0.5rem',
            '&:hover': {
              backgroundColor: '#4caf50', // ホバー時に少し濃い緑色
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{
            margin: '0 0.5rem',
            '&:hover': {
              backgroundColor: '#4caf50', // ホバー時に少し濃い緑色
            },
          }}
        >
          自己紹介
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{
            margin: '0 0.5rem',
            '&:hover': {
              backgroundColor: '#4caf50', // ホバー時に少し濃い緑色
            },
          }}
        >
          作ったもの
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
