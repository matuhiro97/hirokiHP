import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 共通スタイルオブジェクト
const sectionStyle = {
  width: '100%', // 横幅を100%に変更
  maxWidth: '100vw', // ビューポート幅に制限
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',  // 左寄せに変更
  textAlign: 'left',  // テキストを左寄せ
  padding: '2rem',
  paddingLeft: '5%',  // 左にスペースを持たせる
  overflowX: 'hidden', // 横スクロールを防ぐ
};

const headingStyle = {
  marginBottom: '1rem',
  fontWeight: 'bold',
  position: 'relative',
  paddingLeft: '1.5rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '0.4rem',
    backgroundColor: '#fff',
  },
};

// 共通セクションコンポーネント
const Section: React.FC<{
  id?: string;
  title: string;
  backgroundColor: string;
  children: React.ReactNode;
}> = ({ id, title, backgroundColor, children }) => (
  <Box
    id={id}
    sx={{
      ...sectionStyle,
      backgroundColor: backgroundColor,
    }}
  >
    <Box
      sx={{
        color: '#fff',
        textAlign: 'left',
        maxWidth: '600px',
      }}
    >
      <Typography variant="h4" component="h2" sx={headingStyle}>
        {title}
      </Typography>
      {children}
    </Box>
  </Box>
);

const About: React.FC = () => {
  return (
    <>
      {/* 全体の横スクロールを防ぐ */}
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        {/* Section 1: 何者なのか */}
        <Section id="about" title="なにもの？" backgroundColor="#3949ab">
          <Typography variant="body1">
            情報系学部の3年生です。ゲーム、Webなど作ったりしています。
          </Typography>
          <Typography variant="body1">
            登山、キャンプ、旅行もそこそこ好きです。
          </Typography>
        </Section>

        {/* Section 2: 学歴 */}
        <Section id="education" title="学歴" backgroundColor="#42a5f5">
          <Typography variant="body1">2010 - 月小学校</Typography>
          <Typography variant="body1">2013 - 月中学校</Typography>
          <Typography variant="body1">2018 - 羊羹高校</Typography>
          <Typography variant="body1">
            2020 - 宮崎大学大学工学部 工学科 情報通信工学プログラム
          </Typography>
        </Section>

        {/* Section 3: 職歴 */}
        <Section id="experience" title="職歴" backgroundColor="#00bcd4">
          <Typography variant="body1">2014 - smolt</Typography>
          <Typography variant="body1">2015 - ラウンドワン</Typography>
        </Section>
      </Box>
    </>
  );
}

export default About;
