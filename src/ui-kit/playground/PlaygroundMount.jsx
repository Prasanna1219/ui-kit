import React from 'react';
import ReactDOM from 'react-dom/client';
import { Playground } from './Playground.jsx';
import '../styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Playground />
    </React.StrictMode>
);
