import React, { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './App.jsx';
import LoadFontAwesome from "./components/LoadFontAwesome.jsx";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <LoadFontAwesome />
        <AppRouter />
    </StrictMode>
);
