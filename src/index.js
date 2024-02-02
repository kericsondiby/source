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
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Details from './Details';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy1I5SFhtZQw6oPluLn8BHVw1OL65YX7Y",
  authDomain: "datfire-f62bc.firebaseapp.com",
  projectId: "datfire-f62bc",
  storageBucket: "datfire-f62bc.appspot.com",
  messagingSenderId: "571715386059",
  appId: "1:571715386059:web:271c112278ffe58d4ab94e",
  measurementId: "G-GWJXXPXG88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

library.add(fas);
dom.watch();

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: <Details />
  }
]);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
    // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
