import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="blossm tree" image="https://t3.ftcdn.net/jpg/03/83/43/00/360_F_383430016_lzX8FHsxfKaV6nKW22TQ08idxuBXKU3v.jpg" description="a plant that will help you live longer" price="$20" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
