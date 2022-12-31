import React from 'react';
import './App.css';
import Home from './routes/home';
import About from './routes/About';
import Projects from './routes/projects';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (





    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  );
}

export default App;
