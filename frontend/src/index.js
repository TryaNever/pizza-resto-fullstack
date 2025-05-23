import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./App";

const fontAwesomeKit = process.env.REACT_APP_FONT_AWESOME_KIT;

if (fontAwesomeKit) {
    const script = document.createElement('script');
    script.src = `https://kit.fontawesome.com/${fontAwesomeKit}.js`;
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.head.appendChild(script);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);