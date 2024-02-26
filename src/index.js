import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {ToastContainer} from "react-toastify";

// styles
import './assets/styles/styles.scss'
import './assets/styles/font.scss'
import './assets/styles/colors.scss'
import 'swiper/css';

const root = createRoot(document.getElementById('root'));
root.render(
    <MantineProvider>
        <BrowserRouter>
            <App/>
            <ToastContainer rtl={true} position='top-right' />
        </BrowserRouter>
    </MantineProvider>
);
