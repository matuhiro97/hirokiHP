import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 共通スタイルオブジェクト
const sectionStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // 左寄せに変更
  textAlign: 'left', // テキストを左寄せ
  padding: '2rem',
  paddingLeft: '5%', // 左にスペースを持たせる
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

// 年サークルコンポーネント
const YearCircle = ({ year }) => (
  <Box
    sx={{
      width: '80px', // 円のサイズ
      height: '80px', // 円のサイズ
      borderRadius: '50%', // 完全な円にする
      border: '4px solid #fff', // 枠線を追加
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginRight: '1.5rem',
    }}
  >
    {year}
  </Box>
);

// 学歴・職歴の項目コンポーネント
const TimelineItem = ({ year, description }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    }}
  >
    <YearCircle year={year} />
    <Typography variant="body1" sx={{ color: '#fff' }}>
      {description}
    </Typography>
  </Box>
);

// 共通セクションコンポーネント
const Section = ({ id, title, backgroundColor, children }) => (
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

const About = () => {
  return (
    <>
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
        <TimelineItem year="2010" description="月小学校" />
        <TimelineItem year="2013" description="月中学校" />
        <TimelineItem year="2018" description="羊羹高校" />
        <TimelineItem year="2020" description="宮崎大学大学工学部 工学科 情報通信工学プログラム" />
      </Section>

      {/* Section 3: 職歴 */}
      <Section id="experience" title="職歴" backgroundColor="#00bcd4">
        <TimelineItem year="2014" description="smolt" />
        <TimelineItem year="2015" description="ラウンドワン" />
      </Section>
    </>
  );
}

export default About;
