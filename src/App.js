// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './components/links';
import Sidebar from './components/Sidebar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </div>
     
    </BrowserRouter>
  );
}

export default App;



