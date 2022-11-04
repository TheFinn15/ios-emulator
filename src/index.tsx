import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import PhoneContainer from './components/phone-container';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PhoneContainer />
  </React.StrictMode>
);

reportWebVitals();
