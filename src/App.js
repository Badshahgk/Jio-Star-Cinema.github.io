// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';
import FilmPage from './components/FilmPage';
import SubmitAnalysis from './components/SubmitAnalysis';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Jio Star Cinema</h1>
        <h2 style={{ fontStyle: 'italic', color: '#555' }}>Where Every Frame Tells a Story!</h2>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/submit" element={<SubmitAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';
import FilmPage from './components/FilmPage';
import SubmitAnalysis from './components/SubmitAnalysis';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Jio Star Cinema</h1>
        <h2 style={{ fontStyle: 'italic', color: '#555' }}>Where Every Frame Tells a Story!</h2>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/submit" element={<SubmitAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
