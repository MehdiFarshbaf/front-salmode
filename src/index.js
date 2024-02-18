import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// styles
import './assets/styles/styles.scss'
import './assets/styles/font.scss'
import './assets/styles/colors.scss'
import {MantineProvider} from "@mantine/core";

const root = createRoot(document.getElementById('root'));
root.render(
    <MantineProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MantineProvider>
);
