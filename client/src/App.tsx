import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MusicList from './pages/MusicList';
import './App.css'

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<MusicList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;