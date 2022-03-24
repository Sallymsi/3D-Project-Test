import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeFirst from './pages/HomeFirst';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomeFirst />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
