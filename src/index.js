import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import "@eonasdan/tempus-dominus/dist/css/tempus-dominus.css"

// import "font-awesome/css/font-awesome.css"

import '@eonasdan/tempus-dominus/dist/css/tempus-dominus.css';


//Bootstrap is not required for the picker to work
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
dom.watch();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
