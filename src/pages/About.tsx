import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {

  return (
    <Box
     id="about"
     sx={{
      width: '100vw',            // 幅をビューポート全体に設定
      height: '100vh',           // 高さをビューポート全体に設定
      display: 'flex',      
           // Flexbox レイアウトを使用
      alignItems: 'center',      // 縦方向の中央揃え
      justifyContent: 'center',  // 横方向の中央揃え
      backgroundColor: '#3949ab',// 背景色を明るいオレンジに設定
      textAlign: 'center',       // テキストを中央揃え
        }}
     >

        <Box>
             <Typography variant="h4" component="h2" sx={{ marginBottom: '1rem'}}>
                なにもの？
             </Typography>
      
             <Typography variant="body1">
              情報系学部の3年生です。ゲーム、Webなど作ったりしています。
             </Typography>
   
             <Typography variant="body1">
                登山、キャンプ、旅行もそこそこ好きです。
             </Typography>
        </Box>

         
        

    </Box>





    



  );
}

export default About;
