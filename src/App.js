import './App.css';
import React from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Accueil from './pages/accueil.jsx'
import About from './pages/about.jsx'
import Contacts from './pages/contacts.jsx'

function App() {
  return <>
        <HashRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contacts" element={<Contacts/>} />
          </Routes>
      </HashRouter>
  </>;
}

export default App;
