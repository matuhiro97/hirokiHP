import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// 各プロジェクトのページをインポート
import Page01 from './pages/CardPages/01';
import Page02 from './pages/CardPages/02';
import Page03 from './pages/CardPages/03';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 各プロジェクトの詳細ページ */}
          <Route path="/CardPages/01" element={<Page01 />} />
          <Route path="/CardPages/02" element={<Page02 />} />
          <Route path="/CardPages/03" element={<Page03 />} />

          <Route path="*" element={<NotFound />} /> {/* 404 ページ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
