import React from 'react';
import './App.css';
import HomePage from './components/GenericUi/HomePage/HomePage';
import NavBar from "./components/GenericUi/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplitMyBill from './components/Features/SplitMyBill/SplitMyBill';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/splitmybill"  element={<SplitMyBill/>}/>
        </Routes>
      </main>
      <footer className="App-footer">
        Bye
      </footer>
    </BrowserRouter>
  );
}

export default App;
