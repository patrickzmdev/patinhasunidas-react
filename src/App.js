import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navbar';
import HomePage from './pages/FirstPage';
import Footer from './components/Footer';
import Events from './pages/Events';
import Historia from './pages/Historia';


function App() {
  return (

    <Router>
      <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/history' element={<Historia />} />
      </Routes>
      <Footer />
      </div>
    </Router>



  );
}

export default App;
