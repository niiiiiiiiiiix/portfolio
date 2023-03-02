import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import Beans from './components/Beans/Beans';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beans">Beans</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beans" element={<Beans />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
