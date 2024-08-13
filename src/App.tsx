import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;