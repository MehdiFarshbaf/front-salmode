import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

// styles
import './assets/styles/styles.scss'


const root = createRoot(document.getElementById('root'));
root.render(
    <App/>
);
