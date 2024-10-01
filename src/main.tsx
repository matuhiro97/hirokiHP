import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // 拡張子は不要
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
