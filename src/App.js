import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import Vocabulary from './pages/Vocabulary';
import Translator from './pages/Translator';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/translator" element={<Translator />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
