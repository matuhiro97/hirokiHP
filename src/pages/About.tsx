import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 共通スタイルオブジェクト
const sectionStyle = {
  width: '100%',
  minHeight: '100vh', // heightをminHeightに変更
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // 中央揃えに変更
  textAlign: 'left',
  padding: '1rem', // パディングを調整
  boxSizing: 'border-box', // パディングを含めた幅計算
};

const headingStyle = {
  marginBottom: '1rem',
  fontWeight: 'bold',
  position: 'relative',
  paddingLeft: '1.5rem',
  fontSize: { xs: '1.5rem', sm: '2.125rem' }, // レスポンシブフォントサイズ
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
      width: { xs: '60px', sm: '80px' }, // レスポンシブサイズ
      height: { xs: '60px', sm: '80px' },
      borderRadius: '50%',
      border: '4px solid #fff',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: { xs: '1.2rem', sm: '1.5rem' }, // レスポンシブフォントサイズ
      marginRight: { xs: '1rem', sm: '1.5rem' },
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
      flexWrap: { xs: 'wrap', sm: 'nowrap' }, // スマホでは折り返し
    }}
  >
    <YearCircle year={year} />
    <Typography 
      variant="body1" 
      sx={{ 
        color: '#fff',
        width: { xs: '100%', sm: 'auto' }, // スマホでは全幅
        marginTop: { xs: '0.5rem', sm: '0' }, // スマホでは上部にマージン
        fontSize: { xs: '0.9rem', sm: '1rem' }, // レスポンシブフォントサイズ
      }}
    >
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
        width: '100%', // 幅を100%に
        padding: { xs: '1rem', sm: '2rem' }, // レスポンシブパディング
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
        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          情報系学部の3年生です。ゲーム、Webなど作ったりしています。
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
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
