import React, { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './App.jsx';
import './index.css';
import 'remixicon/fonts/remixicon.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);

