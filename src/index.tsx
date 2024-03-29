import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './Components/Landing/Landing';
import Features from './Components/Features/Features';
import Demo from './Components/Demo/Demo';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/features' element={<Features />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
